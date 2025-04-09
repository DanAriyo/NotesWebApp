import { useState } from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void | boolean | Promise<void>;
  children?: React.ReactNode;
  key?: number;
  disabled?: boolean;
  className?: string;
};

export const ButtonComponent = ({
  title,
  onClick,
  children,
  disabled = false,
  className,
}: ButtonProps) => {
  const [isExpandend, setIsExpanded] = useState(false);
  const handleClick = () => {
    if (onClick) {
      const result = onClick();
      if (typeof result === "boolean") {
        setIsExpanded(result);
        return;
      }
    }
  };

  return (
    <>
      <button className={className} onClick={handleClick} disabled={disabled}>
        {title}
      </button>
      {isExpandend && <div>{children}</div>}
    </>
  );
};
