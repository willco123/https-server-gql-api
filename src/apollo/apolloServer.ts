import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import https from "https";
import fs from "fs";
import cors from "cors";

import { typeDefs, resolvers } from "./apolloSchema";
import { MyContext } from "./types";

const app = express();
const env = process.env.NODE_ENV;

const domain = env === "live" ? "https://myApi.example" : "http://localhost";

const options = {
  cert: fs.readFileSync("./myApi.example.pem"),
  key: fs.readFileSync("./myApi.example-key.pem"),
};
const port = process.env.PORT;
const httpServer =
  env === "live"
    ? https.createServer(options, function (req, res) {
        app(req, res);
      })
    : http.createServer(app);

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
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

console.log(`🚀 Server ready at ${domain}:${port}`);
