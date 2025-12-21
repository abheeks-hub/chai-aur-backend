import mongoose, { Aggregate, Schema } from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // Cloudinary based
      required: true,
    },
    thumbnail: {
      type: String, // Cloudinary based
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(aggregatePaginate) 
// Plugin in mongoose is a resuable peice of logic (like an add on or extension) that can be 
// attached in Schemas to add extra functionalities, middlewares, helpers, extra methods

export const Video = mongoose.model("Video", videoSchema);
