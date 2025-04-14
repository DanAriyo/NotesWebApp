import { Story } from "@ladle/react";
import { PopupComponent } from "./PopupComponent";
import { useState } from "react";
import { ButtonComponent } from "../button-component/ButtonComponent";

export const Popup: Story = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className='box'>
      <ButtonComponent
        title='clickMe'
        onClick={() => setIsPopupOpen(true)}
        className='hidden-on-hover'
      />
      <PopupComponent
        isOpen={isPopupOpen}
        onClosed={() => setIsPopupOpen(false)}
        dialogBackdropClassName='fixed inset-0 bg-black/30'
        dialogPanelClassName='flex-col bg-white m-5 p-5 rounded-3xl'
        divClassName='fixed inset-0 flex w-screen items-center justify-center p-4'
      >
        <p>Hi name's Daniel</p>
      </PopupComponent>
    </div>
  );
};

export const DeletePopup: Story = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className='box'>
      <ButtonComponent
        title='clickMe'
        onClick={() => setIsPopupOpen(true)}
        className='hidden-on-hover'
      />
      <PopupComponent
        isOpen={isPopupOpen}
        onClosed={() => setIsPopupOpen(false)}
        dialogBackdropClassName='fixed inset-0 bg-black/30'
        dialogPanelClassName='flex-col bg-white m-5 p-5 rounded-3xl'
        divClassName='fixed inset-0 flex w-screen items-center justify-center p-4'
      >
        <p className='text-center text-2xl p-7'>
          Sei sicuro di voler eliminare la nota
        </p>
        <div className='flex justify-end'>
          <ButtonComponent
            title='No'
            onClick={() => setIsPopupOpen(false)}
            className='p-1.5 m-1.5'
          />
          <ButtonComponent
            title='Si'
            onClick={() => {
              setIsPopupOpen(false);
            }}
            className='p-1.5 m-1.5'
          />
        </div>
      </PopupComponent>
    </div>
  );
};
