import Activity from "../models/Activity";
import User from "../models/User";
import Group from "../models/Group";
import Post from "../models/Post";
import mongoose from "mongoose";

export const connectToMongoDB = async (password) => {
  const mongoUri = `mongodb+srv://admin:${password}@twlatlas-iprie.gcp.mongodb.net/test?retryWrites=true&w=majority`;
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getUsers = async (_groupId) => {
  return await User.find({ groupId: { $elemMatch: _groupId } });
};

export const getUser = async (_userId) => {
  return await User.findById(_userId);
  // Users.find((user) => user.id === userId);
};

export const getGroups = async (_title) => {
  // console.log("title is ", title);
  // if (title !== undefined)
  //   return Groups.filter((group) => group.title.includes(title));
  // return Groups;
  if (_title !== undefined)
    return await Group.find({ title: { $regex: `.*${_title}.*` } });
  return await Group.find();
};

export const getGroup = async (_groupId) => {
  // Groups.find((group) => group.id === groupId);
  return await Group.findById(_groupId);
};

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
