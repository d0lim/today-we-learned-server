import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/db";
import { addDummyGroups, addDummyUsers } from "./graphql/dummy";
import { ObjectId } from "mongodb";
import { getGroups } from "./db/crud/groupCrud";
import { createActivity } from "./db/crud/activityCrud";
import { getPost } from "./db/crud/postCrud";

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
