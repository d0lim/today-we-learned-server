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
  createPost,
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

//5ea1464007ca3e2ce4edad10
const mgo = async () => {
  connectToMongoDB(process.env.MONGO_PASSWORD);

  const groups = await getGroups();
  console.log("Groups Before ::", groups);
  const gId = groups[0]._id;
  const dPost = {
    groupId: gId,
  };
  await createPost(dPost);

  const groupsAfter = await getGroups();
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
