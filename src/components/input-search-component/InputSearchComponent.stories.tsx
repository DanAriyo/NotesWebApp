import { Story } from "@ladle/react";
import InputSearchComponent from "./InputSearchComponent";
import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";

export const LargeInputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      size='border-3 rounded-2xl w-full p-2 text-xl '
    />
  );
};

export const MediumInputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      size='border-3 rounded-2xl w-full p-2 text-lg '
    />
  );
};

export const SmallInputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      size='border-3 rounded-2xl w-full p-1 text-sm '
    />
  );
};

export const IconInputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      size='border-3 rounded-2xl w-full p-2 pl-7 text-xl'
      icon={<LuPencilLine size='1.5rem' />}
    />
  );
};

export const DisabledInputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      size='border-3 rounded-2xl w-full p-2 text-xl'
      disabled={true}
    />
  );
};
