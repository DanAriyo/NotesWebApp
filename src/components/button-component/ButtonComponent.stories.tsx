import { Story } from "@ladle/react";
import "../../index.css";
import { ButtonComponent } from "./ButtonComponent";
import { GoX } from "react-icons/go";

export const ButtonComponents: Story<{
  disabled: boolean;
  variant: string;
  color: string;
}> = ({ disabled, variant, color: color }) => (
  <ButtonComponent
    disabled={disabled}
    variant={`!text-white border-3 border-gray-300 p-3 ${variant}`}
    size={color}
    title='Click Me'
  />
);

ButtonComponents.args = {
  disabled: false,
};

ButtonComponents.argTypes = {
  color: {
    options: ["btn-primary", "btn-danger"],
    control: { type: "select" },
    defaultValue: "btn-primary",
  },

  variant: {
    options: ["text-base", "text-lg", "text-xl"],
    control: { type: "select" },
    defaultValue: "text-base",
  },
};

export const IconButton = () => (
  <ButtonComponent
    icon={<GoX size='2rem' color='gray' />}
    variant='btn-secondary'
    size=''
  ></ButtonComponent>
);

export const DefaultButton = () => (
  <ButtonComponent
    title='Default Click Me'
    variant='bg-white dark:bg-slate-900 border-3 border-gray-300 '
    size='p-5 text-xl dark:!text-white '
  />
);
