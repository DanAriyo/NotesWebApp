import { Story } from "@ladle/react";
import "../../index.css";
import { ButtonComponent } from "./ButtonComponent";

export const DefaultButton: Story = () => (
  <ButtonComponent title='ClickMe' className='button' />
);
export const DisabledButton = () => (
  <ButtonComponent title='Cant ClickMe' disabled />
);

export const InvisibleButton = () => (
  <div className='box'>
    <ButtonComponent title='InsivibleClickMe' className='hidden-on-hover' />
  </div>
);
