import { createYoga } from '@graphql-yoga/node'
import { createServer } from 'node:http'
import { schema } from "./schema";
import { prisma } from "./db";

const yoga = createYoga({
  schema,
  context: {
    prisma
  }
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})
