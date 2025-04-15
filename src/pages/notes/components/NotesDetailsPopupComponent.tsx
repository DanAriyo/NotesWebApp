import { useEffect, useState } from "react";
import { PopupComponent } from "../../../components/popup-component/PopupComponent";
import { InputTextComponent } from "../../../components/input-text-component/InputTextComponent";
import { InputTextAreaComponent } from "../../../components/input-textarea-component/InputTextAreaComponent";
import { ButtonComponent } from "../../../components/button-component/ButtonComponent";
import { Note } from "../../../data/Database";

type NoteDetailsPopupProps = {
  isOpen: boolean;
  onClosed?: () => void;
  item: Note;
  onSave?: (title: string, description: string, id: null | number) => void;
  onDelete?: (id: number) => void;
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
              className='p-1.5 border-2 m-1 font-semibold'
            ></InputTextComponent>
            <InputTextAreaComponent
              value={description}
              valueChanged={setDescription}
              isEditable={item.id == 0 ? isEditable : !isEditable}
              placeHolder={item.id == 0 ? true : false}
              className='p-1.5 border-2 m-1'
            ></InputTextAreaComponent>
          </form>

          <div className='flex justify-between'>
            {item.id != 0 && (
              <ButtonComponent
                title='Modifica'
                onClick={() => setIsEditable(false)}
                disabled={item.id == 0 ? isEditable : !isEditable}
              />
            )}

            <ButtonComponent
              title='Salva'
              onClick={() => {
                onSave?.(title, description, item?.id || null);
                onClosed?.();
              }}
              disabled={item.id == 0 ? !isEditable : isEditable}
            />

            {item != null && item.id != 0 && (
              <ButtonComponent
                title='Elimina'
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
                      variant='p-1.5 m-1.5'
                    />
                    <ButtonComponent
                      title='Si'
                      onClick={() => {
                        onDelete?.(item.id);
                        setDeletePopupIsOpen(false);
                        onClosed?.();
                        setIsEditable(true);
                      }}
                      variant='p-1.5 m-1.5'
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
