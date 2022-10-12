import { createServer } from '@graphql-yoga/node'
import { schema } from "./schema";

const server = createServer({
  schema,

})

server.start()
