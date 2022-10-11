import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
<<<<<<< HEAD
import { prisma } from "./db";
import { DateResolver } from "graphql-scalars";
=======
import { DateResolver } from "graphql-scalars";
import { prisma } from "./db";
>>>>>>> updates

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

<<<<<<< HEAD
builder.addScalarType("Date", DateResolver, {});

=======
>>>>>>> updates
builder.queryType({
  fields: (t) => ({
    hello: t.field({
      type: "String",
      resolve: () => "World",
    }),
  }),
});
<<<<<<< HEAD
=======

builder.addScalarType("Date", DateResolver, {});
>>>>>>> updates
