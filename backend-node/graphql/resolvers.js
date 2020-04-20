import {
  getGroup,
  getGroups,
  getUser,
  getUsers,
  getPost,
  getPosts,
  getActivity,
  getActivities,
} from "./db";
import { Users, Groups, Posts, Activities } from "./dummy";
import { ObjectIdScalar } from "./scalar";

const resolvers = {
  ObjectId: ObjectIdScalar,
  Query: {
    user: (_, { user_id }) => getUser(user_id),
    users: (_, { group_id }) => getUsers(group_id),
    group: (_, { group_id }) => getGroup(group_id),
    groups: (_, { title }) => getGroups(title),
    post: (_, { post_id }) => getPost(post_id),
    posts: (_, { group_id }) => getPosts(group_id),
    activity: (_, { activity_id }) => getActivity(activity_id),
    activities: (_, { post_id, user_id }) => getActivities(post_id, user_id),
  },
  Group: {
    users(parent) {
      // Filter the hardcoded array of Users to only include
      // users that are in correct Group
      // console.log("parent in Group is", parent);
      return Users.filter((user) => user.groupId.includes(parent.id));
    },
    posts(parent) {
      // console.log("parent in Group, posts is", parent);
      return Posts.filter((post) => post.groupId === parent.id);
    },
  },
  User: {
    groups(parent) {
      //console.log("parent in User is", parent);
      return Groups.filter((group) => group.userId.includes(parent.id));
    },
    activities(parent) {
      return Activities.filter((activity) => activity.userId === parent.id);
    },
  },
  Post: {
    activities(parent) {
      return Activities.filter((activity) => activity.postId === parent.id);
    },
  },
  Activity: {
    user(parent) {
      return Users.find((user) => user.id === parent.userId);
    },
  },
};

export default resolvers;
