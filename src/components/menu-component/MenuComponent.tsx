type MenuProps = {
  icon?: React.ReactNode;
  showAside: boolean;
  setShowAside?: (prev: boolean) => void;
};

function MenuComponent({ icon, setShowAside, showAside }: MenuProps) {
  return (
    <div className='flex flex-col justify-center pl-2'>
      <span
        className='cursor-pointer'
        onClick={() => setShowAside?.(showAside)}
      >
        {icon}
      </span>
    </div>
  );
}

export default MenuComponent;
