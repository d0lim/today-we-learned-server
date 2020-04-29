import { ObjectIdScalar, DateScalar } from "./scalar";
import { getUser, getUsers, createUser } from "../db/crud/userCrud";
import { getGroup, getGroups, createGroup } from "../db/crud/groupCrud";
import { getPost, getPosts } from "../db/crud/postCrud";
import { getActivity, getActivities } from "../db/crud/activityCrud";

const resolvers = {
  ObjectId: ObjectIdScalar,
  Date: DateScalar,
  Query: {
    user: (_, { user_id }) => getUser(user_id),
    users: (_, { group_id }) => getUsers(group_id),
    group: (_, { group_id }) => getGroup(group_id),
    groups: (_, { title }) => getGroups(title, undefined, undefined),
    post: (_, { post_id }) => getPost(post_id),
    posts: (_, { group_id }) => getPosts(group_id, undefined),
    activity: (_, { activity_id }) => getActivity(activity_id),
    activities: (_, { post_id, user_id }) => getActivities(post_id, user_id),
  },
  Mutation: {
    addUser: (_, { name, profile_image }) => {
      const userObject = {
        name,
        profile_image,
      };
      return createUser(userObject);
    },
    addGroup: (_, { title, description }) => {
      const groupObject = {
        title,
        description,
      };
      return createGroup(groupObject);
    },
  },
  Group: {
    async users(parent) {
      return await getUsers(parent._id);
    },
    async posts(parent) {
      return await getPosts(parent._id, undefined);
    },
  },
  User: {
    async groups(parent) {
      return await getGroups(undefined, parent._id, undefined);
    },
    async activities(parent) {
      return await getActivities(undefined, parent._id);
    },
  },
  Post: {
    async group(parent) {
      // FIXME: Need to change getGroups function in ../db/crud/groupCrud.js
      return await getGroups(undefined, undefined, parent._id);
    },
    async activities(parent) {
      return await getActivities(parent._id, undefined);
    },
  },
  Activity: {
    async user(parent) {
      return await getUser(parent.userId);
    },
    async post(parent) {
      return await getPosts(undefined, parent._id);
    },
  },
};

export default resolvers;
