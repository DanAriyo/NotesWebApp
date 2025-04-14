import { Story } from "@ladle/react";
import { PopupComponent } from "./PopupComponent";
import { useState } from "react";
import { ButtonComponent } from "../button-component/ButtonComponent";
import { InputTextAreaComponent } from "../input-textarea-component/InputTextAreaComponent";
import { InputTextComponent } from "../input-text-component/InputTextComponent";

export const Popup: Story = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [value, valueChanged] = useState("");
  const [title, setTitle] = useState("");

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
        dialogBackdropClassName='fixed-inset-0-bg-black-30'
        dialogPanelClassName='flex-col-bg-white-m-5-p-5-rounded-3xl'
        divClassName='custom-center-overlay'
      >
        <InputTextComponent
          value={title}
          valueChanged={setTitle}
          isEditable={true}
          placeholder={true}
          className='p-1.5 border-2 m-1 font-semibold'
        ></InputTextComponent>
        <InputTextAreaComponent
          value={value}
          isEditable={true}
          valueChanged={valueChanged}
          placeHolder={true}
          className='padding'
        />
      </PopupComponent>
    </div>
  );
};
