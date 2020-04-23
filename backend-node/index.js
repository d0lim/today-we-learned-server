// import { GraphQLServer } from "graphql-yoga";
// import resolvers from "./graphql/resolvers";
import dotenv from "dotenv";
import {
  connectToMongoDB,
  createGroup,
  getGroups,
  getUser,
  addUserToGroup,
} from "./db/db";
import { addDummyGroups, addDummyUsers } from "./graphql/dummy";
import { ObjectId } from "mongodb";

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
const mgo = async () => {
  connectToMongoDB(process.env.MONGO_PASSWORD);
  // "5e9ef838edc93d10553f0734" //user
  // "5e9ef838edc93d10553f072f" //group
  // addUserToGroup(
  //   ObjectId("5e9ef838edc93d10553f0734"),
  //   ObjectId("5e9ef838edc93d10553f072f")
  // );
  const groups = await getGroups();
  console.log(groups);
};
mgo();

// u.then(function (res) {
//   console.log(res);
// });
// const server = new GraphQLServer({
//   typeDefs: "graphql/schema.graphql",
//   resolvers,
// });
// server.start(() => console.log("Server is running on localhost:4000"));
