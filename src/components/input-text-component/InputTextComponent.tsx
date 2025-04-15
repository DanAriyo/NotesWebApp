type InputTextProps = {
  value?: string;
  placeholder?: boolean;
  valueChanged?: (value: string) => void;
  isEditable?: boolean;
  size?: string;
};

export const InputTextComponent = ({
  value,
  valueChanged,
  isEditable,
  placeholder,
  size,
}: InputTextProps) => {
  return (
    <input
      type='text'
      value={value}
      onChange={(event) => valueChanged?.(event.target.value)}
      className={size}
      readOnly={!isEditable}
      placeholder={placeholder ? "Titolo" : ""}
    />
  );
};
