import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  groupId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  activityId: {
    type: [Schema.Types.ObjectId],
  },
});

export default mongoose.model("post", PostSchema);
