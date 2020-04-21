import { createGroup, createUser } from "./db";

const groups = [
  {
    title: "Study Group",
    description: "Group for logging daily study!",
  },
  {
    title: "Exercise Group",
    description: "Group for logging daily exercise!",
  },
  {
    title: "Cafe Group",
    description: "Group for logging daily coffee making!",
  },
];

const users = [
  {
    name: "user1",
  },
  {
    name: "user2",
    profile_image: "https://api.adorable.io/avatars/285/user2",
  },
  {
    name: "user3",
    profile_image: "https://api.adorable.io/avatars/285/user3",
  },
];

export const addDummyGroups = () => {
  groups.forEach((group) => {
    createGroup(group);
  });
};

export const addDummyUsers = () => {
  users.forEach((user) => {
    createUser(user);
  });
};
