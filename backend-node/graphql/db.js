import { Groups, Users, Posts, Activities } from "./dummy";
import mongoose from "mongoose";

export const connectToMongoDB = async (password) => {
  const mongoUri = `mongodb+srv://admin:${password}@twlatlas-iprie.gcp.mongodb.net/test?retryWrites=true&w=majority`;
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getUsers = (groupId) =>
  Users.filter((user) => user.groupId.includes(groupId));

export const getUser = (userId) => Users.find((user) => user.id === userId);

export const getGroups = (title) => {
  console.log("title is ", title);
  if (title !== undefined)
    return Groups.filter((group) => group.title.includes(title));
  return Groups;
};

export const getGroup = (groupId) =>
  Groups.find((group) => group.id === groupId);

export const getPosts = (groupId) =>
  Posts.filter((post) => post.groupId === groupId);

export const getPost = (postId) => Posts.find((post) => post.id === postId);

export const getActivities = (postId, userId) => {
  if (postId === undefined && userId === undefined) {
    return Activities;
  } else if (postId !== undefined && userId === undefined) {
    return Activities.filter((activity) => activity.postId === postId);
  } else if (postId === undefined && userId !== undefined) {
    return Activities.filter((activity) => activity.userId === userId);
  } else if (postId !== undefined && userId !== undefined) {
    return Activities.filter(
      (activity) => activity.postId === postId && activity.userId === userId
    );
  }
};

export const getActivity = (activityId) =>
  Activities.find((activity) => activity.id === activityId);
