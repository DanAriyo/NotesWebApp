import { Story } from "@ladle/react";
import InputSearchComponent from "./InputSearchComponent";
import { useState } from "react";

export const InputSearch: Story = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputSearchComponent setSearchString={setInputValue} value={inputValue} />
  );
};
