import mongoose from "mongoose";
import { getUser, updateUser } from "./crud/userCrud";
import { getGroup, updateGroup } from "./crud/groupCrud";

export const connectToMongoDB = async (password) => {
  const mongoUri = `mongodb+srv://admin:${password}@twlatlas-iprie.gcp.mongodb.net/test?retryWrites=true&w=majority`;
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

export const addUserToGroupById = async (_userId, _groupId) => {
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
  const userRes = await updateUser(_userId, updatedUser);
  const groupRes = await updateGroup(_groupId, updatedGroup);
  if (userRes !== undefined && groupRes !== undefined) return userRes;
  else console.log("!!!???", userRes, groupRes);
};
