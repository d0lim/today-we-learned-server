import User from "../models/User";

export const getUsers = async (_groupId) => {
  if (_groupId !== undefined)
    return await User.find({ groupId: { $eq: _groupId } });
  return User.find();
};

export const getUser = async (_userId) => {
  return await User.findById(_userId);
  // Users.find((user) => user.id === userId);
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
