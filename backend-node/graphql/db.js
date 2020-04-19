import { Groups, Users } from "./dummy";

export const getUsers = (groupId) =>
  Users.filter((user) => user.groupId.includes(groupId));

export const getUser = (userId) =>
  Users.find((user) => {
    console.log("looking for user", user);
    console.log("user.id is", user.id);
    console.log("argument userId is ", userId);
    return user.id === userId;
  });

export const getGroups = (title) => {
  console.log("title is ", title);
  if (title !== undefined)
    return Groups.filter((group) => group.title.includes(title));
  return Groups;
};

export const getGroup = (groupId) =>
  Groups.find((group) => group.id === groupId);
