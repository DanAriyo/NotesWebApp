import { Note } from "../data/Database";
import { useEffect, useState } from "react";

type InputSearchProps = {
  notes: Note[];
  handleNotes: (notes: Note[]) => void;
  allNotes: Note[];
};

function InputSearchComponent({
  notes,
  handleNotes,
  allNotes,
}: InputSearchProps) {
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (searchString.trim() === "") {
      handleNotes(allNotes);
    } else {
      const notes2 = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchString.toLowerCase()) ||
          note.description.toLowerCase().includes(searchString.toLowerCase())
      );
      handleNotes(notes2.length > 0 ? notes2 : notes);
    }
  }, [searchString]);

  return (
    <div className='flex flex-col justify-center m-2 p-2'>
      <input
        type='text'
        id='filter'
        name='filter'
        placeholder='Cerca tra le note'
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        className='border-2 block mx-auto mt-2 w-69 p-2.5'
      />
    </div>
  );
}

export default InputSearchComponent;
