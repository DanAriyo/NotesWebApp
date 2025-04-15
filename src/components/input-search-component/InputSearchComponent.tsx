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
    <div className='flex flex-col justify-center m-2 p-2 relative'>
      <span className='absolute left-7 top-1/2 -translate-y-1/2 text-gray-400'>
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
