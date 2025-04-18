import "../../index.css";
import { ButtonComponent } from "./ButtonComponent";
import { TiDeleteOutline } from "react-icons/ti";

export const DisabledButton = () => (
  <ButtonComponent title='Cant ClickMe' disabled size='btn-md' />
);

export const PrimaryButton = () => (
  <ButtonComponent title='PrimaryClickMe' variant='btn-primary' size='btn-md' />
);

export const SecondaryButton = () => (
  <ButtonComponent
    title='SecondaryClickMe'
    variant='btn-secondary'
    size='btn-md'
  />
);

export const DangerButton = () => (
  <ButtonComponent title='DangerClickMe' variant='btn-danger' size='btn-md' />
);

export const LargeButton = () => (
  <ButtonComponent
    title='PrimaryClickMe'
    variant='btn-secondary'
    size='btn-lg'
  />
);

export const MediumButton = () => (
  <ButtonComponent
    title='PrimaryClickMe'
    variant='btn-secondary'
    size='btn-md'
  />
);

export const SmallButton = () => (
  <ButtonComponent
    title='PrimaryClickMe'
    variant='btn-secondary'
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
