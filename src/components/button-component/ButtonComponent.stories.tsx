import "../../index.css";
import { ButtonComponent } from "./ButtonComponent";
import { TiDeleteOutline } from "react-icons/ti";

export const DisabledButton = () => (
  <ButtonComponent title='Cant ClickMe' disabled size='text-lg m-2 p-2' />
);

export const PrimaryButton = () => (
  <ButtonComponent
    title='PrimaryClickMe'
    variant='btn-primary'
    size='text-lg m-2 p-2'
  />
);

export const SecondaryButton = () => (
  <ButtonComponent
    title='SecondaryClickMe'
    variant='btn-secondary'
    size='text-lg m-2 p-2'
  />
);

export const DangerButton = () => (
  <ButtonComponent
    title='DangerClickMe'
    variant='btn-danger'
    size='text-lg m-2 p-2'
  />
);

export const LargeButton = () => (
  <ButtonComponent
    title='PrimaryClickMe'
    variant='btn-secondary'
    size='text-xl m-2 p-2'
  />
);

export const MediumButton = () => (
  <ButtonComponent
    title='PrimaryClickMe'
    variant='btn-secondary'
    size='text-lg m-2 p-2'
  />
);

export const SmallButton = () => (
  <ButtonComponent
    title='PrimaryClickMe'
    variant='btn-secondary'
    size='text-sm m-2 p-2'
  />
);

export const IconButton = () => (
  <ButtonComponent
    icon={<TiDeleteOutline size='2rem' />}
    variant='btn-secondary'
    size=''
  ></ButtonComponent>
);
