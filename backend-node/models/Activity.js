import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  modifiedAt: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export default mongoose.model("activity", ActivitySchema);
