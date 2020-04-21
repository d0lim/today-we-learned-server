import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
  },
});

export default mongoose.model("activity", ActivitySchema);
