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

export const Activities = [
  // First
  {
    id: "0",
    postId: "0",
    userId: "0",
    createdAt: "2020-04-07",
    modifiedAt: "2020-04-07",
    text: "First study of DoLim",
  },
  {
    id: "1",
    postId: "0",
    userId: "1",
    createdAt: "2020-04-07",
    modifiedAt: "2020-04-07",
    text: "First study of Collin",
  },
  {
    id: "2",
    postId: "1",
    userId: "1",
    createdAt: "2020-04-07",
    modifiedAt: "2020-04-07",
    text: "First exercise of Collin",
  },
  {
    id: "3",
    postId: "1",
    userId: "2",
    createdAt: "2020-04-07",
    modifiedAt: "2020-04-07",
    text: "First exercise of John",
  },
  // Second
  {
    id: "4",
    postId: "0",
    userId: "0",
    createdAt: "2020-04-08",
    modifiedAt: "2020-04-08",
    text: "Second study of DoLim",
  },
  {
    id: "5",
    postId: "3",
    userId: "1",
    createdAt: "2020-04-08",
    modifiedAt: "2020-04-08",
    text: "Second study of Collin",
  },
  {
    id: "6",
    postId: "3",
    userId: "1",
    createdAt: "2020-04-08",
    modifiedAt: "2020-04-08",
    text: "Second exercise of Collin",
  },
  {
    id: "7",
    postId: "3",
    userId: "2",
    createdAt: "2020-04-08",
    modifiedAt: "2020-04-08",
    text: "Second exercise of John",
  },
  // Third
  {
    id: "8",
    postId: "0",
    userId: "0",
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "Third study of DoLim",
  },
  {
    id: "9",
    postId: "0",
    userId: "1",
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "Third study of Collin",
  },
  {
    id: "10",
    postId: "5",
    userId: "1",
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "Third exercise of Collin",
  },
  {
    id: "11",
    postId: "5",
    userId: "2",
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "Third exercise of John",
  },
  {
    id: "12",
    postId: "2",
    userId: "0",
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "First Coffee of Dolim",
  },
  {
    id: "13",
    postId: "2",
    userId: "2",
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "First Coffee of John",
  },
];
