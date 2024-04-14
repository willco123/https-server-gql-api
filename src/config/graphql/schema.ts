import path from "path";
import { fileURLToPath } from "url";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const typesArray = loadFilesSync(path.join(__dirname, "./**/*.graphql"));
const typesArray = loadFilesSync("./**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync(
  path.join(__dirname, "./**/*.resolvers.*"),
);

export const typeDefs = mergeTypeDefs(typesArray);
export const resolvers = mergeResolvers(resolversArray);
