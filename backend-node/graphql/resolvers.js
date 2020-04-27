import { ObjectIdScalar, DateScalar } from "./scalar";
import { getUser, getUsers } from "../db/crud/userCrud";
import { getGroup, getGroups } from "../db/crud/groupCrud";
import { getPost, getPosts } from "../db/crud/postCrud";
import { getActivity, getActivities } from "../db/crud/activityCrud";

const resolvers = {
  ObjectId: ObjectIdScalar,
  Date: DateScalar,
  Query: {
    user: (_, { user_id }) => getUser(user_id),
    users: (_, { group_id }) => getUsers(group_id),
    group: (_, { group_id }) => getGroup(group_id),
    groups: (_, { title }) => getGroups(title, undefined),
    post: (_, { post_id }) => getPost(post_id),
    posts: (_, { group_id }) => getPosts(group_id, undefined),
    activity: (_, { activity_id }) => getActivity(activity_id),
    activities: (_, { post_id, user_id }) => getActivities(post_id, user_id),
  },
  Group: {
    async users(parent) {
      // Filter the hardcoded array of Users to only include
      // users that are in correct Group
      // console.log("parent in Group is", parent);
      // return Users.filter((user) => user.groupId.includes(parent.id));
      return await getUsers(parent._id);
    },
    async posts(parent) {
      // console.log("parent in Group, posts is", parent);
      // return Posts.filter((post) => post.groupId === parent.id);
      return await getPosts(parent._id, undefined);
    },
  },
  User: {
    async groups(parent) {
      //console.log("parent in User is", parent);
      // return Groups.filter((group) => group.userId.includes(parent.id));
      return await getGroups(undefined, parent._id);
    },
    async activities(parent) {
      // return Activities.filter((activity) => activity.userId === parent.id);
      return await getActivities(undefined, parent._id);
    },
  },
  Post: {
    async group(parent) {
      // return Groups.find((group) => group.postId.includes(parent.id));
      // FIXME: Need to change getGroups function in ../db/crud/groupCrud.js
      return await getGroups();
    },
    async activities(parent) {
      // return Activities.filter((activity) => activity.postId === parent.id);
      return await getActivities(parent._id, undefined);
    },
  },
  Activity: {
    async user(parent) {
      // return Users.find((user) => user.id === parent.userId);
      return await getUser(parent.userId);
    },
    async post(parent) {
      // return Posts.find((post) => post.activityId.includes(parent.id));
      return await getPosts(undefined, parent._id);
    },
  },
};

export default resolvers;
