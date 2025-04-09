import { useEffect, useState } from "react";
import { ButtonComponent } from "../../components/ButtonComponent";
import NotesDetailsPopupComponent from "./components/NotesDetailsPopupComponent";
import { db, Note } from "../../data/Database";
import NoteListItemComponent from "./components/NoteListItemComponent";
import { useLiveQuery } from "dexie-react-hooks";
import InputSearchComponent from "../../components/InputSearchComponent";

function NotesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes2, setNotes2] = useState<Note[]>([]);
  const [searchString, setSearchString] = useState("");

  const createEmptyNote = (): Note => {
    return {
      id: 0,
      title: "",
      description: "",
    };
  };
  const [selectedNote, setSelectedNote] = useState<Note>(createEmptyNote());

  const allNotes = useLiveQuery(() => db.notes.toArray()) ?? [];

  useEffect(() => {
    if (allNotes) {
      setNotes2(allNotes);
    }
  }, [allNotes]);

  useEffect(() => {
    if (searchString.trim() === "") {
      handleNotes(allNotes);
    } else {
      const notes3 = notes2.filter(
        (note) =>
          note.title.toLowerCase().includes(searchString.toLowerCase()) ||
          note.description.toLowerCase().includes(searchString.toLowerCase())
      );
      handleNotes(notes2.length > 0 ? notes3 : notes2);
    }
  }, [searchString]);

  const handleNotes = (notes3: Note[]) => {
    setNotes2(notes3);
  };

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
      setIsOpen(false);
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

  function toggle(note: Note) {
    setIsOpen((value) => !value);
    setSelectedNote(note);
  }

  return (
    <>
      <div className='flex flex-col justify-center mx-auto'>
        <InputSearchComponent
          setSearchString={setSearchString}
          value={searchString}
        />
        <div className='flex flex-col mx-auto m-1.5 shadow-2xl'>
          <ButtonComponent
            title='Crea nuova nota'
            onClick={() => {
              toggle(createEmptyNote());
            }}
            className='w-50 '
          />
        </div>
        <NotesDetailsPopupComponent
          isOpen={isOpen}
          onClosed={() => setIsOpen(false)}
          onSave={addNote}
          item={selectedNote}
          onDelete={deleteNote}
        />
        <NoteListItemComponent notes={notes2} toggle={toggle} />
      </div>
    </>
  );
}

export default NotesPage;
