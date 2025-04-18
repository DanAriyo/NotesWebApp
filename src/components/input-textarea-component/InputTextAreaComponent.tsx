import { useState, useEffect, ChangeEventHandler } from "react";

type InputTextAreaProps = {
  value?: string;
  valueChanged?: (
    value: string
  ) => void | ChangeEventHandler<HTMLTextAreaElement>;
  isEditable?: boolean;
  size?: string;
  placeHolder?: boolean;
};

export function InputTextAreaComponent({
  value,
  valueChanged,
  isEditable,
  size,
  placeHolder,
}: InputTextAreaProps) {
  const [height, setHeight] = useState("auto");
  const adjustHeight = (element: HTMLTextAreaElement) => {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  useEffect(() => {
    if (value) {
      const textarea = document.getElementById("desc") as HTMLTextAreaElement;
      adjustHeight(textarea);
    }
  }, [value]);

  return (
    <textarea
      className={size}
      value={value}
      onChange={(event) => {
        valueChanged?.(event.target.value);
        const textarea = event.target;
        adjustHeight(textarea);
      }}
      name='DescriptionArea'
      id='desc'
      readOnly={!isEditable}
      placeholder={placeHolder ? "Descrizione nota" : ""}
      style={{ height }}
    ></textarea>
  );
}
