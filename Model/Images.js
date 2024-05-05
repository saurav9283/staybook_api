import mongoose from "mongoose";

const ImagesList = new mongoose.Schema({
   i:{
      type: Schema.Types.ObjectId,
      required: true,
      ref: ''
   },
  imageId: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageTitle: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ImagesList", ImagesList);
