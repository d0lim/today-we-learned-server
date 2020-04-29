import Post from "../models/Post";
import { updateGroup, getGroup } from "./groupCrud";

export const getPosts = async (_groupId) => {
  if (_groupId !== undefined) return await Post.find({ groupId: _groupId });
  else return await Post.find();
};

export const getPost = async (_postId, _activityId) => {
  if (_postId !== undefined) return await Post.findById(_postId);
  return await Post.findOne({
    activityId: { $elemMatch: { $eq: _activityId } },
  });
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
  const result = await updateGroup(groupId, updatedGroup);

  if (result !== undefined) return savedPost;
  else {
    console.log("Fucked on postCrud.js", result);
    return undefined;
  }
};

export const updatePost = async (postId, postObject) => {
  const updatedPost = await Post.findByIdAndUpdate(postId, postObject, {
    new: true,
  }).exec();
  if (!updatedPost) {
    console.log("Fucked when updating post");
    return undefined;
  }
  console.log("Post Updated : ", updatedPost);
  return updatedPost;
};
