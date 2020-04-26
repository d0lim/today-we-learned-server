// import { GraphQLServer } from "graphql-yoga";
// import resolvers from "./graphql/resolvers";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/db";
import { addDummyGroups, addDummyUsers } from "./graphql/dummy";
import { ObjectId } from "mongodb";
import { getGroups } from "./db/crud/groupCrud";
import { createActivity } from "./db/crud/activityCrud";
import { getPost } from "./db/crud/postCrud";

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

  const groups = await getGroups();

  const gId = groups[0]._id;
  const uId = groups[0].userId[0];
  const pId = groups[0].postId[0];
  const newActivity = {
    userId: uId,
    postId: pId,
    text: "New Activity 1",
  };
  await createActivity(newActivity);
  // const dPost = {
  //   groupId: gId,
  // };
  // await createPost(dPost);

  // const groupsAfter = await getGroups();
  // console.log("Groups After ::", groupsAfter);
  const postAfter = await getPost(pId);
  console.log(postAfter);
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
