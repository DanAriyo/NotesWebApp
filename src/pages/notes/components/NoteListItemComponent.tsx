import { Note } from "../../../data/Database";

type NoteListItemProps = {
  notes: Note[] | undefined;
  noteClicked?: (note: Note) => void;
};

function NoteListItemComponent({ notes, noteClicked }: NoteListItemProps) {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center m-5'>
        {notes?.map((note) => (
          <div
            key={note.id}
            className=' border-3 border-gray-200 rounded-2xl m-4 cursor-pointer  min-w-[70%] max-w-[70%] min-h-[80%] max-h-[80%] hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'
            onClick={() => noteClicked?.(note)}
          >
            <h2 className='text-center text-xl font-semibold  m-1.5'>
              {note.title}
            </h2>
            <p className='text-center font-sans  m-1.5'>{note.description}</p>
          </div>
        ))}

        {notes?.length == 0 && (
          <div className='flex flex-col col-span-3 justify-center '>
            <h1 className='font-semibold text-3xl'>
              Non sono presenti note al momento
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default NoteListItemComponent;
