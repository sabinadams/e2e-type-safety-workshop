<<<<<<< HEAD
import { ApolloServer } from "apollo-server";
import { schema } from "./schema";

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
=======
import { createServer } from '@graphql-yoga/node'
import { schema } from "./schema";

const server = createServer({
  schema,

})

server.start()
>>>>>>> updates
