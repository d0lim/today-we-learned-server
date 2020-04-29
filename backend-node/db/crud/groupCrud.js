import Group from "../models/Group";

// FIXME: Not perfect condition. Need to find solution to solve.
export const getGroups = async (_title, _userId) => {
  if (_title !== undefined && _userId === undefined)
    return await Group.find({ title: { $regex: `.*${_title}.*` } });
  else if (_title === undefined && _userId !== undefined)
    return await Group.find({ userId: { $elemMatch: { $eq: _userId } } });
  else if (_title !== undefined && _userId !== undefined) {
    return await Group.find({
      title: { $regex: `.*${_title}.*` },
      userId: { $elemMatch: { $eq: _userId } },
    });
  }
  return await Group.find();
};

export const getGroup = async (_groupId, _postId) => {
  if (_groupId !== undefined) return await Group.findById(_groupId);
  return await Group.findOne({ postId: { $elemMatch: { $eq: _postId } } });
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
  return savedGroup;
};

export const updateGroup = async (groupId, groupObject) => {
  const updatedGroup = await Group.findByIdAndUpdate(groupId, groupObject, {
    new: true,
  }).exec();
  if (!updatedGroup) {
    console.log("Fucked when updating group");
    return undefined;
  }
  console.log("Group Updated : ", updatedGroup);
  return updatedGroup;
};
