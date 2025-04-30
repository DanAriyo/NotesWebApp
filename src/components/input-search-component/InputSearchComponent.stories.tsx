import { Story } from "@ladle/react";
import InputSearchComponent from "./InputSearchComponent";
import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";

export const InputSearchComponents: Story<{
  disabled: boolean;
  variant: string;
}> = ({ disabled, variant }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      disabled={disabled}
      size={`border-3 border-gray-200 rounded-2xl w-[80%] md:w-[60%] p-2 pl-11 ${variant} dark:text-white`}
      icon={<LuPencilLine size='1.5rem' />}
    />
  );
};

InputSearchComponents.args = {
  disabled: false,
};

InputSearchComponents.argTypes = {
  variant: {
    options: ["text-base", "text-lg", "text-xl"],
    control: { type: "select" },
    defaultValue: "text-base",
  },
};
