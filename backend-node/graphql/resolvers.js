import { getGroup, getGroups, getUser, getUsers } from "./db";
import { Users, Groups } from "./dummy";

const resolvers = {
  Query: {
    user: (_, { userId }) => getUser(userId),
    users: (_, { groupId }) => getUsers(groupId),
    group: (_, { groupId }) => getGroup(groupId),
    groups: (_, { userId }) => getGroups(userId),
  },
  Group: {
    users(parent) {
      // Filter the hardcoded array of Users to only include
      // users that are in correct Group
      console.log(parent);
      return Users.filter((user) => user.groupId.includes(parent.id));
    },
  },
  User: {
    groups(parent) {
      console.log(parent);
      return Groups.filter((group) => group.userId.includes(parent.id));
    },
  },
};

export default resolvers;
