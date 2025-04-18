import { useLiveQuery } from "dexie-react-hooks";
import { useCallback, useMemo, useState } from "react";

import { ButtonComponent } from "../../components/button-component/ButtonComponent";
import InputSearchComponent from "../../components/input-search-component/InputSearchComponent";
import { db, Note } from "../../data/Database";
import NoteListItemComponent from "./components/NoteListItemComponent";
import NotesDetailsPopupComponent from "./components/NotesDetailsPopupComponent";
import { LuPencilLine } from "react-icons/lu";

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

  return (
    <>
      <div className='flex flex-col items-center mx-auto bg-white dark:bg-slate-900 text-black dark:text-white min-h-screen'>
        <InputSearchComponent
          setSearchString={setSearchString}
          value={searchString}
          size='textarea-sm w-100 !pl-10'
          icon={<LuPencilLine size='1.5rem' />}
        />
        <div className='flex flex-col mx-auto m-1.5 shadow-2xl'>
          <ButtonComponent
            title='Crea nuova nota'
            onClick={() => {
              showNotePopup(createEmptyNote());
            }}
            variant='btn-secondary !m-0'
            size='btn-md'
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
