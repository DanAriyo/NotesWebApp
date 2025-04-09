import { Note } from "../../../data/Database";
import { ButtonComponent } from "../../../components/ButtonComponent";
type NoteListItemProps = {
  notes: Note[] | undefined;
  toggle?: (note: Note) => void;
};

function NoteListItemComponent({ notes, toggle }: NoteListItemProps) {
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
                onClick={() => toggle?.(note)}
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
