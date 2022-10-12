<<<<<<< HEAD
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
=======
import { createServer } from '@graphql-yoga/node'
import { schema } from "./schema";
import { prisma } from "./db";


const server = createServer({
  schema,
  context: {
    prisma
  }
})

server.start()
>>>>>>> updates
