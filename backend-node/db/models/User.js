import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
  },
  groupId: {
    type: [Schema.Types.ObjectId],
  },
  activityId: {
    type: [Schema.Types.ObjectId],
  },
});

export default mongoose.model("user", UserSchema);
