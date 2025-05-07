import Dexie, { type EntityTable } from "dexie";

type Note = {
  id: number;
  title: string;
  description: string;
  tagId: string;
};

type Tag = {
  id: number;
  name: string;
};

const db = new Dexie("NotesDatabase") as Dexie & {
  notes: EntityTable<Note, "id">;
  tags: EntityTable<Tag, "id">;
};

db.version(1).stores({
  notes: "++id, title, description, tagId",
  tags: "++id, name",
});

export type { Note };
export type { Tag };
export { db };
