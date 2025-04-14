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
