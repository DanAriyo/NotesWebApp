import { ChangeEventHandler } from "react";

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
  return (
    <textarea
      className={size}
      value={value}
      onChange={(event) => valueChanged?.(event.target.value)}
      name='DescriptionArea'
      id='desc'
      readOnly={!isEditable}
      placeholder={placeHolder ? "Descrizione nota" : ""}
    ></textarea>
  );
}
