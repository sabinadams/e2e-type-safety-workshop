import { builder } from "../builder";

builder.prismaObject("Note", {
  findUnique: (note) => ({ id: note.id }),
  fields: (t) => ({
    id: t.exposeID("id"),
    message: t.exposeString("message"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date",
    }),
  }),
});
