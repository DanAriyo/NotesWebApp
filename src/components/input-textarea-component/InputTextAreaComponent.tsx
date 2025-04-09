import { ChangeEventHandler } from "react";

type InputTextAreaProps = {
  value?: string;
  valueChanged?: (
    value: string
  ) => void | ChangeEventHandler<HTMLTextAreaElement>;
  isEditable?: boolean;
  className?: string;
  placeHolder?: boolean;
};

export function InputTextAreaComponent({
  value,
  valueChanged,
  isEditable,
  className,
  placeHolder,
}: InputTextAreaProps) {
  return (
    <textarea
      className={className}
      cols={30}
      rows={10}
      value={value}
      onChange={(event) => valueChanged?.(event.target.value)}
      name='DescriptionArea'
      id='desc'
      readOnly={!isEditable}
      placeholder={placeHolder ? "Descrizione nota" : ""}
    ></textarea>
  );
}
