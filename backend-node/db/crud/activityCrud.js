import { getUser, updateUser } from "./userCrud";
import { getPost, updatePost } from "./postCrud";

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

// Activity must be made with user and post
export const createActivity = async (activityObject) => {
  const activity = new Activity(activityObject);
  const savedActivity = await activity.save({ setDefaultsOnInsert: true });
  console.log("Activity Saved :", savedActivity);

  const oldUser = await getUser(activityObject.userId);
  const oldPost = await getPost(activityObject.postId);
  if (
    oldUser.activityId.includes(savedActivity._id) ||
    oldPost.activityId.includes(savedActivity._id)
  ) {
    console.log(
      "Overlap in activityId of user or post. User, Post:",
      oldUser.name,
      "/",
      oldPost.groupId,
      oldPost.date
    );
    return;
  }
  const updatedUser = {
    name: oldUser.name,
    profile_image: oldUser.profile_image,
    groupId: oldUser.groupId,
    activityId: oldUser.activityId.concat(savedActivity._id),
  };
  const updatedPost = {
    groupId: oldPost.groupId,
    date: oldPost.date,
    activityId: oldPost.activityId.concat(savedActivity._id),
  };
  updateUser(savedActivity.userId, updatedUser);
  updatePost(savedActivity.postId, updatedPost);
};
