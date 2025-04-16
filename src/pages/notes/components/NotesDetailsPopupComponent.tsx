import { useEffect, useState } from "react";
import { PopupComponent } from "../../../components/popup-component/PopupComponent";
import { InputTextComponent } from "../../../components/input-text-component/InputTextComponent";
import { InputTextAreaComponent } from "../../../components/input-textarea-component/InputTextAreaComponent";
import { ButtonComponent } from "../../../components/button-component/ButtonComponent";
import { Note } from "../../../data/Database";
import { LuPencilLine } from "react-icons/lu";

type NoteDetailsPopupProps = {
  isOpen: boolean;
  onClosed?: () => void;
  item: Note;
  onSave?: (title: string, description: string, id: null | number) => void;
  onDelete?: (id: number) => void;
  icon?: React.ReactNode;
};

const NotesDetailsPopupComponent = ({
  isOpen,
  onClosed,
  item,
  onSave,
  onDelete,
}: NoteDetailsPopupProps) => {
  const [isEditable, setIsEditable] = useState(item.id == 0 ? true : false);
  const [description, setDescription] = useState(item.description);
  const [title, setTitle] = useState(item.title);
  const [deletePopupIsOpen, setDeletePopupIsOpen] = useState(false);

  useEffect(() => {
    setTitle(item.title);
    setDescription(item.description);
  }, [item]);

  return (
    <>
      <div>
        <PopupComponent
          isOpen={isOpen}
          onClosed={() => {
            onClosed?.();
            setIsEditable(true);
          }}
          dialogBackdropClassName='fixed inset-0 bg-black/30'
          dialogPanelClassName='flex-col bg-white m-5 p-5 rounded-3xl'
          divClassName='fixed inset-0 flex w-screen items-center justify-center p-4'
        >
          <form className='flex flex-col'>
            <InputTextComponent
              value={title}
              valueChanged={setTitle}
              isEditable={item.id == 0 ? isEditable : !isEditable}
              placeholder={item.id == 0 ? true : false}
              size='textarea-sm !text-lg font-semibold'
            ></InputTextComponent>
            <InputTextAreaComponent
              value={description}
              valueChanged={setDescription}
              isEditable={item.id == 0 ? isEditable : !isEditable}
              placeHolder={item.id == 0 ? true : false}
              size='textarea-lg'
            ></InputTextAreaComponent>
          </form>
          {item.id != 0 && (
            <div className='flex flex-row border-2 rounded-2xl border-gray-300 m-2 p-2'>
              <InputTextComponent value='Modifica la Nota' size='text-center' />
              <ButtonComponent
                icon={<LuPencilLine size='1.5rem' color='gray' />}
                variant=''
                size='btn-md'
                onClick={() => setIsEditable(false)}
                disabled={item.id == 0 ? isEditable : !isEditable}
              />
            </div>
          )}
          <div className='flex justify-between '>
            <ButtonComponent
              title='Salva'
              variant='btn-secondary w-full'
              size='btn-md'
              onClick={() => {
                onSave?.(title, description, item?.id || null);
                onClosed?.();
              }}
              disabled={item.id == 0 ? !isEditable : isEditable}
            />

            {item != null && item.id != 0 && (
              <ButtonComponent
                title='Elimina'
                variant='btn-secondary w-full'
                size='btn-md'
                onClick={() => {
                  setDeletePopupIsOpen(true);
                  return true;
                }}
              >
                <PopupComponent
                  isOpen={deletePopupIsOpen}
                  onClosed={() => setDeletePopupIsOpen(false)}
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
                      onClick={() => setDeletePopupIsOpen(false)}
                      variant='btn-secondary w-full'
                      size='btn-md'
                    />
                    <ButtonComponent
                      title='Si'
                      onClick={() => {
                        onDelete?.(item.id);
                        setDeletePopupIsOpen(false);
                        onClosed?.();
                        setIsEditable(true);
                      }}
                      variant='btn-secondary w-full'
                      size='btn-md'
                    />
                  </div>
                </PopupComponent>
              </ButtonComponent>
            )}
          </div>
        </PopupComponent>
      </div>
    </>
  );
};

export default NotesDetailsPopupComponent;
