import { useEffect, useState } from "react";
import { PopupComponent } from "../../../components/popup-component/PopupComponent";
import { InputTextComponent } from "../../../components/input-text-component/InputTextComponent";
import { InputTextAreaComponent } from "../../../components/input-textarea-component/InputTextAreaComponent";
import { ButtonComponent } from "../../../components/button-component/ButtonComponent";
import { Note } from "../../../data/Database";
import { Tag } from "../../../data/Database";

import { LuPencilLine } from "react-icons/lu";
import { ComboBox } from "@/components/ui/ComboBox";

type NoteDetailsPopupProps = {
  isOpen: boolean;
  onClosed?: () => void;
  item: Note;
  onSave?: (
    title: string,
    description: string,
    id: null | number,
    tagId: string
  ) => void;
  onDelete?: (id: number) => void;
  icon?: React.ReactNode;
  tags?: Tag[];
  addTag?: (name: string) => void;
};

const NotesDetailsPopupComponent = ({
  isOpen,
  onClosed,
  item,
  onSave,
  onDelete,
  tags,
  addTag,
}: NoteDetailsPopupProps) => {
  const [isEditable, setIsEditable] = useState(item.id == 0 ? true : false);
  const [description, setDescription] = useState(item.description);
  const [title, setTitle] = useState(item.title);
  const [deletePopupIsOpen, setDeletePopupIsOpen] = useState(false);
  const [tagPopupIsOpen, setTagPopupIsOpen] = useState(false);
  const [currentTag, setCurrentTag] = useState("");

  useEffect(() => {
    setTitle(item.title);
    setDescription(item.description);
    setCurrentTag(item.tagId);
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
          dialogPanelClassName='flex-col bg-white m-5 p-5 rounded-3xl dark:bg-slate-800 dark:text-white'
          divClassName='fixed inset-0 flex w-screen items-center justify-center p-4'
        >
          <form className='flex flex-col'>
            <InputTextComponent
              value={title}
              valueChanged={setTitle}
              isEditable={item.id == 0 ? isEditable : !isEditable}
              placeholder={item.id == 0 ? true : false}
              size='border-3 border-gray-200 rounded-2xl p-1 m-2 pl-3 text-lg font-semibold dark:bg-gray-600'
            ></InputTextComponent>
            <InputTextAreaComponent
              value={description}
              valueChanged={setDescription}
              isEditable={item.id == 0 ? isEditable : !isEditable}
              placeHolder={item.id == 0 ? true : false}
              size='border-3 border-gray-200 rounded-2xl p-2 m-2 dark:bg-gray-600 resize-none overflow-y-hidden'
            ></InputTextAreaComponent>
          </form>

          <ComboBox
            open={tagPopupIsOpen}
            setOpen={setTagPopupIsOpen}
            choices={tags}
            setChoices={addTag}
            currentTag={currentTag}
            setCurrentTag={setCurrentTag}
          />

          {item.id != 0 && (
            <div className='flex flex-row border-3 rounded-2xl border-gray-200 m-2 p-2 dark:bg-gray-600'>
              <InputTextComponent
                value='Modifica la Nota'
                size='text-center '
              />
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
              variant='btn-primary w-full !text-white'
              size='text-lg m-2 p-1'
              onClick={() => {
                onSave?.(title, description, item?.id || null, currentTag);
                onClosed?.();
              }}
              disabled={
                item.id == 0 && title.length != 0 && description.length != 0
                  ? !isEditable
                  : isEditable
              }
            />

            {item != null && item.id != 0 && (
              <ButtonComponent
                title='Elimina'
                variant='btn-danger w-full !text-white'
                size='text-lg m-2 p-1'
                onClick={() => {
                  setDeletePopupIsOpen(true);
                  return true;
                }}
              >
                <PopupComponent
                  isOpen={deletePopupIsOpen}
                  onClosed={() => setDeletePopupIsOpen(false)}
                  dialogBackdropClassName='fixed inset-0 bg-black/30'
                  dialogPanelClassName='flex-col bg-white m-5 p-5 rounded-3xl dark:bg-slate-800 dark:text-white'
                  divClassName='fixed inset-0 flex w-screen items-center justify-center p-4'
                >
                  <p className='text-center text-2xl p-7'>
                    Sei sicuro di voler eliminare la nota
                  </p>
                  <div className='flex justify-end'>
                    <ButtonComponent
                      title='No'
                      onClick={() => setDeletePopupIsOpen(false)}
                      variant='btn-danger w-full !text-white'
                      size='text-lg m-2 p-1'
                    />
                    <ButtonComponent
                      title='Si'
                      onClick={() => {
                        onDelete?.(item.id);
                        setDeletePopupIsOpen(false);
                        onClosed?.();
                        setIsEditable(true);
                      }}
                      variant='btn-primary w-full !text-white'
                      size='text-lg m-2 p-1'
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
