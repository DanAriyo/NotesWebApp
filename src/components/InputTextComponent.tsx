type InputTextProps = {
  value?: string;
  placeholder?: boolean;
  valueChanged?: (value: string) => void;
  isEditable?: boolean;
  className?: string;
};

export const InputTextComponent = ({
  value,
  valueChanged,
  isEditable,
  placeholder,
  className,
}: InputTextProps) => {
  return (
    <input
      type='text'
      value={value}
      onChange={(event) => valueChanged?.(event.target.value)}
      className={className}
      readOnly={!isEditable}
      placeholder={placeholder ? "Titolo" : ""}
    />
  );
};
