import { Note } from "../../../data/Database";

type NoteListItemProps = {
  notes: Note[] | undefined;
  noteClicked?: (note: Note) => void;
};

function NoteListItemComponent({ notes, noteClicked }: NoteListItemProps) {
  return (
    <>
      <div className='defaultNote'>
        {notes?.map((note) => (
          <div
            key={note.id}
            className=' box cursor-pointer hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'
            onClick={() => noteClicked?.(note)}
          >
            <h2 className='text-center text-2xl m-1.5'>{note.title}</h2>
            <p className='text-center font-sans  m-1.5'>{note.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default NoteListItemComponent;
