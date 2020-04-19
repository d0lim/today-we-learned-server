import { Groups, Users, Posts } from "./dummy";

export const getUsers = (groupId) =>
  Users.filter((user) => user.groupId.includes(groupId));

export const getUser = (userId) => Users.find((user) => user.id === userId);

export const getGroups = (title) => {
  console.log("title is ", title);
  if (title !== undefined)
    return Groups.filter((group) => group.title.includes(title));
  return Groups;
};

export const getGroup = (groupId) =>
  Groups.find((group) => group.id === groupId);

export const getPosts = (groupId) =>
  Posts.filter((post) => post.groupId === groupId);

export const getPost = (postId) => Posts.find((post) => post.id === postId);
