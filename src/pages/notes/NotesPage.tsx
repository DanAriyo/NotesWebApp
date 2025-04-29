import { useLiveQuery } from "dexie-react-hooks";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { ButtonComponent } from "../../components/button-component/ButtonComponent";
import ChoiceBoxComponent from "../../components/choicebox-component/ChoiceBoxComponent";
import InputSearchComponent from "../../components/input-search-component/InputSearchComponent";
import { db, Note } from "../../data/Database";
import NoteListItemComponent from "./components/NoteListItemComponent";
import NotesDetailsPopupComponent from "./components/NotesDetailsPopupComponent";
import { IoSearch } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { MdMonitor } from "react-icons/md";

const createEmptyNote = (): Note => {
  return {
    id: 0,
    title: "",
    description: "",
  };
};

function NotesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note>(createEmptyNote());
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.theme || "os"
  );

  const handleChange = (event: { target: { id: SetStateAction<string> } }) => {
    setSelectedTheme(event.target.id);
  };

  const dbNotes = useLiveQuery(() => db.notes.toArray());

  const filteredNotes = useMemo(() => {
    if (!dbNotes) return [];
    if (searchString === "") return dbNotes;

    return dbNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchString.toLowerCase()) ||
        note.description.toLowerCase().includes(searchString.toLowerCase())
    );
  }, [searchString, dbNotes]);

  async function addNote(
    title: string,
    description: string,
    id: number | null
  ) {
    try {
      if (id != null && id != 0) {
        const note = await db.notes.get(id);

        if (note) {
          note.title = title;
          note.description = description;

          await db.notes.put(note);
          return { success: true, message: "Nota aggiornata con successo!" };
        } else {
          return { success: false, message: "Nota non trovata!" };
        }
      } else {
        await db.notes.add({
          title,
          description,
        });
      }
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Errore durante l'inserimento della nota:", error);
      return { success: false, message: "Inserimento non riuscito!" };
    }
  }

  async function deleteNote(id: number) {
    try {
      const note = await db.notes.get(id);

      if (note) {
        await db.notes.delete(id);
        return { success: true, message: "Nota eliminata con successo!" };
      } else {
        return { success: false, message: "Nota non trovata!" };
      }
    } catch (error) {
      console.error("Errore durante l'eliminazione della nota:", error);
      return { success: false, message: "Errore durante l'eliminazione!" };
    }
  }

  const showNotePopup = useCallback((note: Note) => {
    setIsPopupOpen((value) => !value);
    setSelectedNote(note);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateTheme = (theme: string) => {
      if (theme === "light") {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
      }

      if (theme === "dark") {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
      }

      if (theme === "os") {
        localStorage.removeItem("theme");

        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    };

    const handleMediaChange = (e: { matches: any }) => {
      if (selectedTheme === "os") {
        const prefersDark = e.matches;
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    };

    updateTheme(selectedTheme);

    if (selectedTheme === "os") {
      const prefersDarkMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      prefersDarkMediaQuery.addEventListener("change", handleMediaChange);
    }

    return () => {
      if (selectedTheme === "os") {
        const prefersDarkMediaQuery = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
        prefersDarkMediaQuery.removeEventListener("change", handleMediaChange);
      }
    };
  }, [selectedTheme]);

  return (
    <>
      <div className='flex flex-col items-center mx-auto bg-white dark:bg-slate-900 text-black dark:text-white min-h-screen'>
        <div className='flex flex-col md:flex-row items-center w-full'>
          <InputSearchComponent
            setSearchString={setSearchString}
            value={searchString}
            size=' border-3 border-gray-200 rounded-2xl w-[80%] md:w-[60%] p-2 pl-7 text-xl'
            icon={<IoSearch size='1.5rem' />}
          />
          <ChoiceBoxComponent
            lightModeIcon={<IoIosSunny size='2rem' />}
            darkModeIcon={<BsMoonStars size='1.5rem' />}
            osModeIcon={<MdMonitor size='1.5rem' />}
            size='flex flex-row bg-gray-200 rounded-2xl p-1 mb-2 mr-3 items-center'
            selectedTheme={selectedTheme}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-col mx-auto m-3'>
          <ButtonComponent
            title='Crea nuova nota'
            onClick={() => {
              showNotePopup(createEmptyNote());
            }}
            variant='bg-white dark:bg-slate-900 border-3 border-gray-300 '
            size='p-5 text-xl dark:!text-white '
          />
        </div>
        <NotesDetailsPopupComponent
          isOpen={isPopupOpen}
          onClosed={() => setIsPopupOpen(false)}
          onSave={addNote}
          item={selectedNote}
          onDelete={deleteNote}
        />
        <NoteListItemComponent
          notes={filteredNotes}
          noteClicked={showNotePopup}
        />
      </div>
    </>
  );
}

export default NotesPage;
