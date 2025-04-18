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
      size='textarea-lg '
    />
  );
};

export const MediumInputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      size='textarea-md '
    />
  );
};

export const SmallInputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      size='textarea-sm '
    />
  );
};

export const IconInputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent
      setSearchString={setInputValue}
      value={inputValue}
      size='textarea-sm w-100 !pl-10 '
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
      size='textarea-md '
      disabled={true}
    />
  );
};
