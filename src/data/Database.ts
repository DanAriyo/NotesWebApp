import Dexie, { type EntityTable } from "dexie";

type Note = {
  id: number;
  title: string;
  description: string;
};

const db = new Dexie("NotesDatabase") as Dexie & {
  notes: EntityTable<Note, "id">;
};

db.version(1).stores({
  notes: "++id, title, description",
});

export type { Note };
export { db };
