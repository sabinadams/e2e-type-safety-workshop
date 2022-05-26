import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { prisma } from "./db";

const server = new ApolloServer({
  schema,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
