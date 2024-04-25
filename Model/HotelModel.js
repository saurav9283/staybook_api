import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  hotelImage: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
    required: true,
  },
  hotelAriName: {
    type: String,
    required: true,
  },
  hotelRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  hotelPhoneNumber: {
    type: String,
    required: true,
  },
  hotelEmail: {
    type: String,
    required: true,
  },
  hotelFullAddress: {
    type: String,
    required: true,
  },
  hotelLandmark: {
    type: String,
    required: true,
  },
  hotelCitySlug: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Hotel", HotelSchema);
