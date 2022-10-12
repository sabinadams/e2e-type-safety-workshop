import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
<<<<<<< HEAD
import { prisma } from "./db";
import { DateResolver } from "graphql-scalars";
import { PrismaClient } from "@prisma/client";
=======
import { DateResolver } from "graphql-scalars";
import { prisma, PrismaClient } from "./db";
>>>>>>> updates

export const builder = new SchemaBuilder<{
  Context: { prisma: PrismaClient };
  PrismaTypes: PrismaTypes;
  Scalars: {
<<<<<<< HEAD
    Date: { Input: Date; Output: Date };
=======
    Date: { Input: String; Output: Date };
>>>>>>> updates
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
