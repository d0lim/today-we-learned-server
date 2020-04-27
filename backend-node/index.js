import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/db";

dotenv.config();

async function main() {
  await connectToMongoDB(process.env.MONGO_PASSWORD);
  const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
  });
  server.start(() => console.log("Server is running on localhost:4000"));
}

main();
