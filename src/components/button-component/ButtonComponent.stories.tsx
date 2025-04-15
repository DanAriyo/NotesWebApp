import { Story } from "@ladle/react";
import "../../index.css";
import { ButtonComponent } from "./ButtonComponent";
import { TiDeleteOutline } from "react-icons/ti";

export const DefaultButton: Story = () => (
  <ButtonComponent title='ClickMe' variant='button' />
);
export const DisabledButton = () => (
  <ButtonComponent title='Cant ClickMe' disabled />
);

export const InvisibleButton = () => (
  <div className='box'>
    <ButtonComponent title='InsivibleClickMe' variant='hidden-on-hover' />
  </div>
);

export const PrimaryButton = () => (
  <ButtonComponent title='PrimaryClickMe' variant='btn-primary' />
);

export const PrimaryLargeButton = () => (
  <ButtonComponent title='PrimaryClickMe' variant='btn-primary' size='btn-lg' />
);

export const PrimaryMediumButton = () => (
  <ButtonComponent title='PrimaryClickMe' variant='btn-primary' size='btn-md' />
);

export const PrimarySmallButton = () => (
  <ButtonComponent title='PrimaryClickMe' variant='btn-primary' size='btn-sm' />
);

export const SecondaryButton = () => (
  <ButtonComponent title='SecondaryClickMe' variant='btn-secondary' />
);

export const SecondaryLargeButton = () => (
  <ButtonComponent
    title='SecondaryClickMe'
    variant='btn-primary'
    size='btn-lg'
  />
);

export const SecondaryMediumButton = () => (
  <ButtonComponent
    title='SecondaryClickMe'
    variant='btn-primary'
    size='btn-md'
  />
);

export const SecondarySmallButton = () => (
  <ButtonComponent
    title='SecondaryClickMe'
    variant='btn-primary'
    size='btn-sm'
  />
);

export const IconButton = () => (
  <ButtonComponent
    icon={<TiDeleteOutline size='2rem' />}
    variant='btn-secondary'
    size=''
  ></ButtonComponent>
);
