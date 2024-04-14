export const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
  Mutation: {
    setMessage: (_: any, { message }: { message: string }) => {
      return message;
    },
  },
};
