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
    <div className='flex flex-col items-center m-5 p-1 relative lg:left-[23%] w-[70%] md:w-[77%] md:left-[8%] lg:w-[53%]'>
      <span className='absolute left-[13%] bottom-[30%] md:left-[7%] text-gray-400'>
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
