import { ObjectId } from "mongodb";

// Groups is dummy data of Group
export const Groups = [
  {
    id: ObjectId("0"),
    title: "Study",
    description: "Group for Studying",
    userId: [ObjectId("0"), ObjectId("1"), ObjectId("2")],
  },
  {
    id: ObjectId("1"),
    title: "Exercise",
    description: "Group for Exercise",
    userId: [ObjectId("0"), ObjectId("1")],
  },
  {
    id: ObjectId("2"),
    title: "Coffee",
    description: "Group for making Coffee",
    userId: [ObjectId("0"), ObjectId("2")],
  },
];

// Users is dummy data of Author
export const Users = [
  {
    id: ObjectId("0"),
    name: "DoLim",
    profile_image: "https://api.adorable.io/avatars/285/dolim",
    groupId: [ObjectId("0"), ObjectId("1"), ObjectId("2")],
  },
  {
    id: ObjectId("1"),
    name: "Collin",
    profile_image: "https://api.adorable.io/avatars/285/collin",
    groupId: [ObjectId("0"), ObjectId("1")],
  },
  {
    id: ObjectId("2"),
    name: "John",
    profile_image: "https://api.adorable.io/avatars/285/john",
    groupId: [ObjectId("0"), ObjectId("2")],
  },
];

export const Posts = [
  {
    id: ObjectId("0"),
    groupId: ObjectId("0"),
    date: "2020-04-07",
  },
  {
    id: ObjectId("1"),
    groupId: ObjectId("1"),
    date: "2020-04-07",
  },
  {
    id: ObjectId("2"),
    groupId: ObjectId("0"),
    date: "2020-04-08",
  },
  {
    id: ObjectId("3"),
    groupId: ObjectId("1"),
    date: "2020-04-08",
  },
  {
    id: ObjectId("4"),
    groupId: ObjectId("0"),
    date: "2020-04-09",
  },
  {
    id: ObjectId("5"),
    groupId: ObjectId("1"),
    date: "2020-04-09",
  },
  {
    id: ObjectId("6"),
    groupId: ObjectId("2"),
    date: "2020-04-09",
  },
];

export const Activities = [
  // First
  {
    id: ObjectId("0"),
    postId: ObjectId("0"),
    userId: ObjectId("0"),
    createdAt: "2020-04-07",
    modifiedAt: "2020-04-07",
    text: "First study of DoLim",
  },
  {
    id: ObjectId("1"),
    postId: ObjectId("0"),
    userId: ObjectId("1"),
    createdAt: "2020-04-07",
    modifiedAt: "2020-04-07",
    text: "First study of Collin",
  },
  {
    id: ObjectId("2"),
    postId: ObjectId("1"),
    userId: ObjectId("1"),
    createdAt: "2020-04-07",
    modifiedAt: "2020-04-07",
    text: "First exercise of Collin",
  },
  {
    id: ObjectId("3"),
    postId: ObjectId("1"),
    userId: ObjectId("2"),
    createdAt: "2020-04-07",
    modifiedAt: "2020-04-07",
    text: "First exercise of John",
  },
  // Second
  {
    id: ObjectId("4"),
    postId: ObjectId("0"),
    userId: ObjectId("0"),
    createdAt: "2020-04-08",
    modifiedAt: "2020-04-08",
    text: "Second study of DoLim",
  },
  {
    id: ObjectId("5"),
    postId: ObjectId("3"),
    userId: ObjectId("1"),
    createdAt: "2020-04-08",
    modifiedAt: "2020-04-08",
    text: "Second study of Collin",
  },
  {
    id: ObjectId("6"),
    postId: ObjectId("3"),
    userId: ObjectId("1"),
    createdAt: "2020-04-08",
    modifiedAt: "2020-04-08",
    text: "Second exercise of Collin",
  },
  {
    id: ObjectId("7"),
    postId: ObjectId("3"),
    userId: ObjectId("2"),
    createdAt: "2020-04-08",
    modifiedAt: "2020-04-08",
    text: "Second exercise of John",
  },
  // Third
  {
    id: ObjectId("8"),
    postId: ObjectId("0"),
    userId: ObjectId("0"),
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "Third study of DoLim",
  },
  {
    id: ObjectId("9"),
    postId: ObjectId("0"),
    userId: ObjectId("1"),
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "Third study of Collin",
  },
  {
    id: ObjectId("10"),
    postId: ObjectId("5"),
    userId: ObjectId("1"),
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "Third exercise of Collin",
  },
  {
    id: ObjectId("11"),
    postId: ObjectId("5"),
    userId: ObjectId("2"),
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "Third exercise of John",
  },
  {
    id: ObjectId("12"),
    postId: ObjectId("2"),
    userId: ObjectId("0"),
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "First Coffee of Dolim",
  },
  {
    id: ObjectId("13"),
    postId: ObjectId("2"),
    userId: ObjectId("2"),
    createdAt: "2020-04-09",
    modifiedAt: "2020-04-09",
    text: "First Coffee of John",
  },
];
