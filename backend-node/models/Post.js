import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
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
