import { Story } from "@ladle/react";
import { InputTextAreaComponent } from "./InputTextAreaComponent";
import { useState } from "react";

export const MediumInputTextArea: Story = () => {
  const [value, valueChanged] = useState("");
  return (
    <InputTextAreaComponent
      value={value}
      isEditable={true}
      valueChanged={valueChanged}
      placeHolder={true}
      size='border-3 border-gray-200 rounded-2xl p-2 m-2 resize-none overflow-y-hidden text-lg'
    />
  );
};

export const SmallInputTextArea: Story = () => {
  const [value, valueChanged] = useState("");
  return (
    <InputTextAreaComponent
      value={value}
      isEditable={true}
      valueChanged={valueChanged}
      placeHolder={true}
      size='border-3 border-gray-200 rounded-2xl p-2 m-2 resize-none overflow-y-hidden text-sm '
    />
  );
};

export const LargeInputTextArea: Story = () => {
  const [value, valueChanged] = useState("");
  return (
    <InputTextAreaComponent
      value={value}
      isEditable={true}
      valueChanged={valueChanged}
      placeHolder={true}
      size='border-3 border-gray-200 rounded-2xl p-2 m-2 resize-none overflow-y-hidden text-2xl dark:text-white'
    />
  );
};

export const DisabledInputTextArea: Story = () => {
  const [value, valueChanged] = useState("");
  return (
    <InputTextAreaComponent
      value={value}
      isEditable={false}
      valueChanged={valueChanged}
      placeHolder={true}
      size='border-3 border-gray-200 rounded-2xl p-2 m-2 resize-none overflow-y-hidden'
    />
  );
};
