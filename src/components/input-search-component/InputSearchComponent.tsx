type InputSearchProps = {
  setSearchString: (value: string) => void;
  value: string;
};

function InputSearchComponent({ setSearchString, value }: InputSearchProps) {
  return (
    <div className='flex flex-col justify-center m-2 p-2'>
      <input
        type='text'
        id='filter'
        name='filter'
        placeholder='Cerca tra le note'
        value={value}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        className='border-2 block mx-auto mt-2 w-69 p-2.5'
      />
    </div>
  );
}

export default InputSearchComponent;
