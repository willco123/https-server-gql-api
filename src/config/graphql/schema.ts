import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typesArray = loadFilesSync("./**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync("./**/*.resolvers.*");

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);
export const schema = makeExecutableSchema({ typeDefs, resolvers });
