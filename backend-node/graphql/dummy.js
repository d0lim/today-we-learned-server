// Groups is dummy data of Group
export const Groups = [
  {
    id: "0",
    title: "Study",
    description: "Group for Studying",
    userId: ["0", "1", "2"],
  },
  {
    id: "1",
    title: "Exercise",
    description: "Group for Exercise",
    userId: ["0", "1"],
  },
  {
    id: "2",
    title: "Coffee",
    description: "Group for making Coffee",
    userId: ["0", "2"],
  },
];

// Users is dummy data of Author
export const Users = [
  {
    id: "0",
    name: "DoLim",
    profile_image: "https://api.adorable.io/avatars/285/dolim",
    groupId: ["0", "1", "2"],
  },
  {
    id: "1",
    name: "Collin",
    profile_image: "https://api.adorable.io/avatars/285/collin",
    groupId: ["0", "1"],
  },
  {
    id: "2",
    name: "John",
    profile_image: "https://api.adorable.io/avatars/285/john",
    groupId: ["0", "2"],
  },
];

export const Posts = [
  {
    id: "0",
    groupId: "0",
    date: "2020-04-07",
  },
  {
    id: "1",
    groupId: "1",
    date: "2020-04-07",
  },
  {
    id: "2",
    groupId: "0",
    date: "2020-04-08",
  },
  {
    id: "3",
    groupId: "1",
    date: "2020-04-08",
  },
  {
    id: "4",
    groupId: "0",
    date: "2020-04-09",
  },
  {
    id: "5",
    groupId: "1",
    date: "2020-04-09",
  },
  {
    id: "6",
    groupId: "2",
    date: "2020-04-09",
  },
];
