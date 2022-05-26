export type Note = {
  message: string;
  createdAt: Date;
};

export type User = {
  name: string;
  notes: Note[];
};
