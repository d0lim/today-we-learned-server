import {
  getGroup,
  getGroups,
  getUser,
  getUsers,
  getPost,
  getPosts,
} from "./db";
import { Users, Groups, Posts } from "./dummy";

const resolvers = {
  Query: {
    user: (_, { user_id }) => getUser(user_id),
    users: (_, { group_id }) => getUsers(group_id),
    group: (_, { group_id }) => getGroup(group_id),
    groups: (_, { title }) => getGroups(title),
    post: (_, { post_id }) => getPost(post_id),
    posts: (_, { group_id }) => getPosts(group_id),
  },
  Group: {
    users(parent) {
      // Filter the hardcoded array of Users to only include
      // users that are in correct Group
      // console.log("parent in Group is", parent);
      return Users.filter((user) => user.groupId.includes(parent.id));
    },
    posts(parent) {
      console.log("parent in Group, posts is", parent);
      return Posts.filter((post) => post.groupId === parent.id);
    },
  },
  User: {
    groups(parent) {
      //console.log("parent in User is", parent);
      return Groups.filter((group) => group.userId.includes(parent.id));
    },
  },
};

export default resolvers;
