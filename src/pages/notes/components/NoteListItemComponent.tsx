import { ButtonComponent } from "../../../components/button-component/ButtonComponent";
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
          <div key={note.id} className=' box'>
            <h2 className='text-center text-2xl m-1.5'>{note.title}</h2>
            <p className='text-center font-sans  m-1.5'>{note.description}</p>
            <div className='flex flex-col items-center'>
              <ButtonComponent
                title='Visualizza'
                onClick={() => noteClicked?.(note)}
                className=' w-25 hidden-on-hover '
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NoteListItemComponent;
