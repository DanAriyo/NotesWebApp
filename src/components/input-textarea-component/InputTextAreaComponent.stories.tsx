import { Story } from "@ladle/react";
import { InputTextAreaComponent } from "./InputTextAreaComponent";
import { useState } from "react";

export const InputTextArea: Story = () => {
  const [value, valueChanged] = useState("");
  return (
    <InputTextAreaComponent
      value={value}
      isEditable={true}
      valueChanged={valueChanged}
      placeHolder={true}
      size='p-3 border-2 m-1'
    />
  );
};
