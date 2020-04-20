import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import dotenv from "dotenv";
import { connectToMongoDB } from "./graphql/db";

dotenv.config();

// // ... or using `require()`
// // const { GraphQLServer } = require('graphql-yoga')

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || "World"}`,
//   },
// };
connectToMongoDB(process.env.MONGO_PASSWORD);

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});
server.start(() => console.log("Server is running on localhost:4000"));
