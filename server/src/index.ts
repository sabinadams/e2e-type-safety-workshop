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