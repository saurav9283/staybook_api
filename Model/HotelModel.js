import mongoose from 'mongoose';

// Define the SlugDetails schema
const slugDetailsSchema = new mongoose.Schema({
  hotel: String,
  hotelCity: String,
  hotelRegion: String,
  hotelState: String,
  hotelCountry: String,
});

// Define the PaymentOptions schema
const paymentOptionsSchema = new mongoose.Schema({
  postpaidPayment: Boolean,
  prepaidPayment: Boolean,
  partialPayment: Boolean,
});

// Define the ImagesList schema
const imagesListSchema = new mongoose.Schema({
  imageId: String,
  imageUrl: String,
  imageTitle: String,
});

// Define the HotelInfoDetails schema
const hotelInfoDetailsSchema = new mongoose.Schema({
  hotelName: String, //
  hotelEmailId: String,   //
  hotelContactNumber: Number,   //
  hotelLandmark: String,   
  hotelAddress: String,  //
  hotelStartingPrice: Number,
  hotelDescription: String,  //
  hotelStarRating: Number,
  hotelImageUrl: String,
  hotelState: String,    //<<
  hotelCity: String,   //<<
  hotelCountry: String,
  hotelRegion: String,
  hotelPincode: String,   //<<
  hotelSlugsDetails: slugDetailsSchema,
  hotelLongitude: Number,
  hotelLatitude: Number,
  hotelMapUrl: String,
  hotelPaymentOption: paymentOptionsSchema,
  hotelImagesList: [imagesListSchema],      //
});

// Create mongoose models
const SlugDetails = mongoose.model('SlugDetails', slugDetailsSchema);
const PaymentOptions = mongoose.model('PaymentOptions', paymentOptionsSchema);
const HotelInfoDetails = mongoose.model('HotelInfoDetails', hotelInfoDetailsSchema);
const ImagesList = mongoose.model('ImagesList', imagesListSchema);

export { SlugDetails, PaymentOptions, ImagesList, HotelInfoDetails };
