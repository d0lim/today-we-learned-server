import Post from "../models/Post";
import { updateGroup, getGroup } from "./groupCrud";

export const getPosts = async (_groupId, _activityId) => {
  if (_groupId !== undefined && _activityId === undefined)
    return await Post.find({ groupId: _groupId });
  else if (_groupId === undefined && _activityId !== undefined)
    return await Post.find({
      activityId: { $elemMatch: { $eq: _activityId } },
    });
  else if (_groupId !== undefined && _activityId !== undefined)
    return await Post.find({
      groupId: _groupId,
      activityId: { $elemMatch: { $eq: _activityId } },
    });
  else return await Post.find();
};

export const getPost = async (_postId) => {
  return await Post.findById(_postId);
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
    return;
  }
  console.log("Post Updated : ", updatedPost);
};
