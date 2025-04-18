import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ButtonComponent } from "../button-component/ButtonComponent";
import { GoX } from "react-icons/go";
type ModalProps = {
  isOpen: boolean;
  onClosed?: () => void;
  children?: React.ReactNode;
  dialogPanelClassName?: string;
  dialogBackdropClassName?: string;
  divClassName?: string;
};

export function PopupComponent({
  isOpen,
  onClosed,
  children,
  dialogBackdropClassName,
  dialogPanelClassName,
  divClassName,
}: ModalProps) {
  const close = () => {
    onClosed?.();
  };

  return (
    <>
      <Dialog
        open={isOpen}
        className={"relative z-500"}
        as='div'
        onClose={close}
      >
        <DialogBackdrop className={dialogBackdropClassName} />
        <div className={divClassName}>
          <DialogPanel>
            <div className={dialogPanelClassName}>
              <div className='flex justify-end mr-4'>
                <ButtonComponent
                  icon={<GoX size='2rem' color='gray' />}
                  variant=''
                  size=''
                  onClick={() => onClosed?.()}
                ></ButtonComponent>
              </div>
              {children}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
