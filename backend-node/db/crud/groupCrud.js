import Group from "../models/Group";

export const getGroups = async (_title, _userId) => {
  // console.log("title is ", title);
  // if (title !== undefined)
  //   return Groups.filter((group) => group.title.includes(title));
  // return Groups;
  if (_title !== undefined && _userId === undefined)
    return await Group.find({ title: { $regex: `.*${_title}.*` } });
  else if (_title === undefined && _userId !== undefined)
    return await Group.find({ userId: { $elemMatch: _userId } });
  else if (_title !== undefined && _userId !== undefined)
    await Group.find({
      title: { $regex: `.*${_title}.*` },
      userId: { $elemMatch: _userId },
    });
  return await Group.find();
};

export const getGroup = async (_groupId) => {
  // Groups.find((group) => group.id === groupId);
  return await Group.findById(_groupId);
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
