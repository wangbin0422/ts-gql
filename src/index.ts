import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";

import { TodoResolver } from "./resolvers/todoResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [TodoResolver],
    emitSchemaFile: true
  });

  const app = Express();

  const server = new ApolloServer({
    schema
  });

  server.applyMiddleware({ app });

  app.listen(9002, () =>
    console.log("Server is running on http://localhost:9002/graphql")
  );
}

main();