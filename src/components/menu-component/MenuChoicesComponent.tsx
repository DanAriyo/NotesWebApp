import { SetStateAction } from "react";

type MenuChoicesProps = {
  notesIcon?: React.ReactNode;
  tagsIcon?: React.ReactNode;
  trashIcon?: React.ReactNode;
  selectedChoice?: string;
  setSelectedChoice?: (choice: string) => void;
};

function MenuChoicesComponent({
  notesIcon,
  tagsIcon,
  trashIcon,
  selectedChoice,
  setSelectedChoice,
}: MenuChoicesProps) {
  return (
    <div className='w-1/6 flex flex-col p-2'>
      <aside>
        {[
          { label: "Note", icon: notesIcon },
          { label: "Cestino", icon: trashIcon },
          { label: "Tag", icon: tagsIcon },
        ].map(({ label, icon }) => (
          <div
            key={label}
            className={`group flex flex-row items-center rounded-4xl hover:bg-slate-100 dark:hover:bg-slate-200 cursor-pointer ${
              selectedChoice === label ? "bg-gray-400" : ""
            }`}
            onClick={() => setSelectedChoice?.(label)}
          >
            {icon}
            <p className='text-center font-semibold text-lg text-gray-700 dark:text-white group-hover:text-black dark:group-hover:text-black'>
              {label}
            </p>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default MenuChoicesComponent;
