import { Story } from "@ladle/react";
import { PopupComponent } from "./PopupComponent";
import { useState } from "react";
import { ButtonComponent } from "../button-component/ButtonComponent";

export const Popup: Story = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      className='border-3 border-gray-200 rounded-2xl cursor-pointer w-[30%] h-full hover:shadow-lg hover:bg-gray-100  transition-all duration-200 '
      onClick={() => setIsPopupOpen(true)}
    >
      <p>Click on Me to see the Popup</p>
      <PopupComponent
        isOpen={isPopupOpen}
        onClosed={() => setIsPopupOpen(false)}
        dialogBackdropClassName='fixed inset-0 bg-black/30'
        dialogPanelClassName='flex-col bg-white m-5 p-5 rounded-3xl'
        divClassName='fixed inset-0 flex w-screen items-center justify-center p-4'
      >
        <p>Hi this is a generic Popup</p>
      </PopupComponent>
    </div>
  );
};

export const DeletePopup: Story = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      className='border-3 border-gray-200 rounded-2xl m-4 cursor-pointer  w-[30%] hover:shadow-lg hover:bg-gray-100  transition-all duration-200'
      onClick={() => setIsPopupOpen(true)}
    >
      <p>Click on Me to see the Delete Popup</p>
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
            variant='!text-white btn-danger w-full'
            size='text-lg m-2 p-1'
          />
          <ButtonComponent
            title='Si'
            onClick={() => {
              setIsPopupOpen(false);
            }}
            variant='!text-white btn-primary w-full'
            size='text-lg m-2 p-1'
          />
        </div>
      </PopupComponent>
    </div>
  );
};
