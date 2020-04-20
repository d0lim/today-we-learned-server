import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  date: {
    type: String,
    required: true,
  },

  activityId: {
    type: [Schema.Types.ObjectId],
  },
});

export default mongoose.model("post", PostSchema);
