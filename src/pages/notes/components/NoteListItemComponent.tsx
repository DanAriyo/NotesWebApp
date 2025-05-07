import { Note, Tag } from "../../../data/Database";

type NoteListItemProps = {
  notes: Note[] | undefined;
  noteClicked?: (note: Note) => void;
  tags?: Tag[];
};

function assignTailwindColors(tags: Tag[] = []): Map<string, string> {
  const colorClasses = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-orange-500",
    "bg-teal-500",
    "bg-rose-500",
  ];

  const result = new Map<string, string>();

  tags.forEach((tag, index) => {
    const color = colorClasses[index % colorClasses.length];
    result.set(tag.name, color);
  });

  return result;
}

function NoteListItemComponent({
  notes,
  noteClicked,
  tags,
}: NoteListItemProps) {
  const tagColors = assignTailwindColors(tags);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center m-5'>
        {notes?.map((note) => (
          <div
            key={note.id}
            className=' border-3 border-gray-200 rounded-2xl m-4 cursor-pointer  min-w-[70%] max-w-[70%] min-h-[80%] max-h-[80%] hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'
            onClick={() => noteClicked?.(note)}
          >
            <h2 className='text-center text-xl font-semibold  m-1.5'>
              {note.title}
            </h2>
            <p className='text-center font-sans  m-1.5'>{note.description}</p>
            <p
              className={`${tagColors.get(
                note.tagId
              )} rounded-3xl text-center font-sans m-5`}
            >
              {note.tagId}
            </p>
          </div>
        ))}

        {notes?.length == 0 && (
          <div className='flex flex-col col-span-3 justify-center '>
            <h1 className='font-semibold text-3xl'>
              Non sono presenti note al momento
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default NoteListItemComponent;
