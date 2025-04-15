import { useState } from "react";

type ButtonProps = {
  title?: string;
  onClick?: () => void | boolean | Promise<void>;
  children?: React.ReactNode;
  key?: number;
  disabled?: boolean;
  variant?: string;
  size?: string;
  icon?: React.ReactNode;
};

export const ButtonComponent = ({
  title,
  onClick,
  children,
  disabled = false,
  variant,
  size,
  icon,
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
      <button
        className={`${variant} ${size}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {icon || title}
      </button>
      {isExpandend && <div>{children}</div>}
    </>
  );
};
