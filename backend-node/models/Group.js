import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: [Schema.Types.ObjectId],
  },
  postId: {
    type: [Schema.Types.ObjectId],
  },
});

export default mongoose.model("group", GroupSchema);
