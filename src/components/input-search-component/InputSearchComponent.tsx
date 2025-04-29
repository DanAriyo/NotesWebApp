type InputSearchProps = {
  setSearchString: (value: string) => void;
  value: string;
  size?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};

function InputSearchComponent({
  setSearchString,
  value,
  size,
  disabled = false,
  icon,
}: InputSearchProps) {
  return (
    <div className='flex flex-col items-center m-5 p-1 relative w-[70%] md:w-[90%] '>
      <span className='absolute left-9 bottom-4 md:left-98 text-gray-400'>
        {icon}
      </span>
      <input
        type='text'
        id='filter'
        name='filter'
        placeholder='Cerca tra le note'
        value={value}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        className={size}
        disabled={disabled}
      />
    </div>
  );
}

export default InputSearchComponent;
