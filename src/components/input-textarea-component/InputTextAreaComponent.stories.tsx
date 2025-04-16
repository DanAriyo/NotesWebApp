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
      size='textarea-md'
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
      size='textarea-sm'
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
      size='textarea-lg'
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
      size='textarea-md'
    />
  );
};
