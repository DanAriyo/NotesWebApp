import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ButtonComponent } from "./button-component/ButtonComponent";

type ModalProps = {
  isOpen: boolean;
  onClosed?: () => void;
  children?: React.ReactNode;
};

export function PopupComponent({ isOpen, onClosed, children }: ModalProps) {
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
        <DialogBackdrop className='fixed inset-0 bg-black/30' />
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel>
            <div className=' flex-col bg-white m-5 p-5 rounded-3xl'>
              <div className='flex justify-end mr-4'>
                <ButtonComponent
                  title='x'
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
