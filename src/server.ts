import * as dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server-express";
dotenv.config();
import { createApp } from "./app";
import { PORT } from "./config/constants";
// dotenv.config();
async function startApolloServer() {
  const app = createApp();
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => {
        return "Hello, Graphql";
      },
    },
  };
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });
  app.listen(app.get(PORT), () => {
    console.log(
      `[${
        process.env.NODE_ENV
      }] Server is up and running on http://localhost:${app.get(PORT)}${
        server.graphqlPath
      }`
    );
  });
}

startApolloServer().catch((err) => {
  console.error("Error starting Apollo Server:", err);
});
