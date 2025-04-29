import { SetStateAction } from "react";

type ChoiceBoxProps = {
  darkModeIcon?: React.ReactNode;
  lightModeIcon?: React.ReactNode;
  osModeIcon?: React.ReactNode;
  selectedTheme?: string;
  size?: string;
  handleChange?: (event: {
    target: {
      id: SetStateAction<string>;
    };
  }) => void | undefined;
};

function ChoiceBoxComponent({
  darkModeIcon,
  lightModeIcon,
  osModeIcon,
  selectedTheme,
  size,
  handleChange,
}: ChoiceBoxProps) {
  return (
    <>
      <div className={size} role='radiogroup'>
        <label
          htmlFor='dark'
          className={`m-1 p-1 cursor-pointer flex items-center rounded-xl ${
            selectedTheme === "dark" ? "bg-gray-500" : ""
          }`}
        >
          <input
            type='radio'
            id='dark'
            name='theme'
            checked={selectedTheme === "dark"}
            onChange={handleChange}
            className='hidden'
          />
          <span>{darkModeIcon}</span>
        </label>

        <label
          htmlFor='light'
          className={`m-1 p-1 cursor-pointer flex items-center rounded-xl ${
            selectedTheme === "light" ? "bg-gray-500" : ""
          }`}
        >
          <input
            type='radio'
            id='light'
            name='theme'
            checked={selectedTheme === "light"}
            onChange={handleChange}
            className='hidden'
          />
          <span>{lightModeIcon}</span>
        </label>

        <label
          htmlFor='os'
          className={`m-1 p-1 cursor-pointer flex items-center rounded-xl ${
            selectedTheme === "os" ? "bg-gray-500" : ""
          }`}
        >
          <input
            type='radio'
            id='os'
            name='theme'
            checked={selectedTheme === "os"}
            onChange={handleChange}
            className='hidden'
          />
          <span>{osModeIcon}</span>
        </label>
      </div>
    </>
  );
}

export default ChoiceBoxComponent;
