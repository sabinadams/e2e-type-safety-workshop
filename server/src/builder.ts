import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { DateResolver } from "graphql-scalars";
import { prisma, PrismaClient } from "./db";

export const builder = new SchemaBuilder<{
  Context: { prisma: PrismaClient };
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: { Input: String; Output: Date };
  };
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.queryType({
  fields: (t) => ({
    hello: t.field({
      type: "String",
      resolve: () => "World",
    }),
  }),
});

builder.addScalarType("Date", DateResolver, {});
