// import { GraphQLServer } from "graphql-yoga";
// import resolvers from "./graphql/resolvers";
import dotenv from "dotenv";
import {
  connectToMongoDB,
  createGroup,
  getGroups,
  getUser,
  addUserToGroup,
  getUsers,
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

  const users = await getUsers();
  const groups = await getGroups();
  console.log("Users Before ::", users);
  console.log("Groups Before ::", groups);
  await addUserToGroup(users[0]._id, groups[0]._id);
  const usersAfter = await getUsers();
  const groupsAfter = await getGroups();
  console.log("Users After ::", usersAfter);
  console.log("Groups After ::", groupsAfter);
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
