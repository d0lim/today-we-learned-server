import { Groups, Users } from "./dummy";

export const getUsers = (groupId) =>
  Users.filter((user) => user.groupId.includes(groupId));

export const getUser = (userId) => Users[userId];

export const getGroups = (userId) =>
  Groups.filter((group) => group.userId.includes(userId));

export const getGroup = (groupId) => Groups[groupID];
