import { Story } from "@ladle/react";
import { InputTextAreaComponent } from "./InputTextAreaComponent";
import { useState } from "react";

export const InputTextAreaComponents: Story<{
  isEditable: boolean;
  variant: string;
}> = ({ isEditable, variant }) => {
  const [value, valueChanged] = useState("");

  return (
    <InputTextAreaComponent
      valueChanged={valueChanged}
      value={value}
      isEditable={isEditable}
      size={`border-3 border-gray-200 rounded-2xl p-2 m-2 dark:bg-gray-600 dark:text-white resize-none overflow-y-hidden ${variant}`}
    />
  );
};

InputTextAreaComponents.args = {
  isEditable: true,
};

InputTextAreaComponents.argTypes = {
  variant: {
    options: ["text-base", "text-lg", "text-xl"],
    control: { type: "select" },
    defaultValue: "text-base",
  },
};
