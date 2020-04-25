import Activity from "./models/Activity";
import User from "./models/User";
import Group from "./models/Group";
import Post from "./models/Post";
import mongoose from "mongoose";

export const connectToMongoDB = async (password) => {
  const mongoUri = `mongodb+srv://admin:${password}@twlatlas-iprie.gcp.mongodb.net/test?retryWrites=true&w=majority`;
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

export const getUsers = async (_groupId) => {
  if (_groupId !== undefined)
    return await User.find({ groupId: { $elemMatch: _groupId } });
  return User.find();
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

export const getPosts = async (_groupId) => {
  // Posts.filter((post) => post.groupId === groupId);
  return await Post.find({ groupId: { $elemMatch: _groupId } });
};

export const getPost = async (_postId) => {
  // Posts.find((post) => post.id === _postId);
  return await Post.findById(_postId);
};

export const getActivities = async (_postId, _userId) => {
  if (_postId === undefined && _userId === undefined) {
    return await Activity.find();
  } else if (_postId !== undefined && _userId === undefined) {
    // return Activities.filter((activity) => activity.postId === _postId);
    return await Activity.find({ postId: _postId });
  } else if (_postId === undefined && _userId !== undefined) {
    // return Activities.filter((activity) => activity.userId === _userId);
    return await Activity.find({ userId: _userId });
  } else if (_postId !== undefined && _userId !== undefined) {
    // return Activities.filter(
    //   (activity) => activity.postId === _postId && activity.userId === _userId
    // );
    return await Activity.find({ userId: _userId, postId: _postId });
  }
};

export const getActivity = async (_activityId) => {
  // Activities.find((activity) => activity.id === activityId);
  return await Activity.findById(_activityId);
};

export const addUserToGroup = async (_userId, _groupId) => {
  const oldUser = await getUser(_userId);
  const oldGroup = await getGroup(_groupId);
  let { name, profile_image, groupId, activityId } = oldUser;
  let { title, description, userId, postId } = oldGroup;
  if (groupId.includes(_groupId) || userId.includes(_userId)) {
    console.log("Overlap when add user to group!!");
    return;
  }
  groupId = groupId.concat(_groupId);
  const updatedUser = {
    name,
    profile_image,
    groupId,
    activityId,
  };
  userId = userId.concat(_userId);
  const updatedGroup = {
    title,
    description,
    userId,
    postId,
  };
  updateUser(_userId, updatedUser);
  updateGroup(_groupId, updatedGroup);
};

// Group can be made itself
export const createGroup = async (groupObject) => {
  const { title, description, userId, postId } = groupObject;
  const group = new Group({
    title,
    description,
    userId,
    postId,
  });
  const savedGroup = await group.save({ setDefaultsOnInsert: true });
  console.log("Group Saved :", savedGroup);
};

// User can be made itself
export const createUser = async (userObject) => {
  const { name, profile_image, groupId, activityId } = userObject;
  const user = new User({
    name,
    profile_image,
    groupId,
    activityId,
  });
  const savedUser = await user.save({ setDefaultsOnInsert: true });
  console.log("User Saved :", savedUser);
};

// Post must be made with group
export const createPost = async (postObject) => {
  const { groupId, date, activityId } = postObject;
  const post = new Post({
    groupId,
    date,
    activityId,
  });
  const savedPost = await post.save({ setDefaultsOnInsert: true });
  console.log("Post Saved :", savedPost);

  const oldGroup = await getGroup(groupId);
  let { title, description, userId, postId } = oldGroup;
  if (postId.includes(savedPost._id)) {
    console.log("Overlap in postId of group:", title);
    return;
  }
  postId = postId.concat(savedPost._id);
  const updatedGroup = {
    title,
    description,
    userId,
    postId,
  };
  updateGroup(groupId, updatedGroup);
};

// Activity must be made with user and post
export const createActivity = async (activityObject) => {
  const { userId, postId, createdAt, modifiedAt, text } = activityObject;
  const activity = new Activity({
    userId, // necessary
    postId, // necessary
    createdAt, // necessary
    modifiedAt, // necessary
    text, // necessary
  });
  const savedActivity = await activity.save({ setDefaultsOnInsert: true });
  console.log("Activity Saved :", savedActivity);
};

export const updateGroup = async (groupId, groupObject) => {
  const updatedGroup = await Group.findByIdAndUpdate(groupId, groupObject, {
    new: true,
  }).exec();
  if (!updatedGroup) {
    console.log("Fucked when updating group");
    return;
  }
  console.log("Group Updated : ", updatedGroup);
};

export const updateUser = async (userId, userObject) => {
  const updatedUser = await User.findByIdAndUpdate(userId, userObject, {
    new: true,
  }).exec();
  if (!updatedUser) {
    console.log("Fucked when updating user");
    return;
  }
  console.log("User Updated : ", updatedUser);
};
