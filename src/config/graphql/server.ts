import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import cors from "cors";

import app from "../../app.js";
import { schema } from "./schema.js";
import { MyContext } from "./types.js";
import { Server } from "../../types.js";

export default async function listenGraphql({
  httpServer,
  port,
  connectionProtocol,
}: {
  httpServer: Server;
  port: String | undefined;
  connectionProtocol: String | undefined;
}) {
  const server = new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `Graphql Server established\n Connection protocol: ${connectionProtocol}\n Listening on port ${port}`,
  );
}
