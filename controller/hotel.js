import {HotelInfoDetails} from "../Model/HotelModel.js";

export const createHotel = async (req, res, next) => {
  try {
    // Extract data from request body
    const {
      hotelImage,
      hotelName,
      hotelAriName,
      hotelRating,
      hotelPhoneNumber,
      hotelEmail,
      hotelFullAddress,
      hotelLandmark,
      hotelCitySlug,
    } = req.body;
    console.log(req.body)

    // Create new Hotel document
    const newHotel = new HotelInfoDetails({
      hotelImage,
      hotelName,
      hotelAriName,
      hotelRating,
      hotelPhoneNumber,
      hotelEmail,
      hotelFullAddress,
      hotelLandmark,
      hotelCitySlug,
    });

    await newHotel.save();

    res.status(201).json({ message: "Hotel created successfully" });
  } catch (error) {
    console.error("Error creating hotel:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updatedHotel = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      hotelImage,
      hotelName,
      hotelAriName,
      hotelRating,
      hotelPhoneNumber,
      hotelEmail,
      hotelFullAddress,
      hotelLandmark,
      hotelCitySlug,
    } = req.body;

    let hotel = await HotelInfoDetails.findById(id);

    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }

    hotel.hotelImage = hotelImage;
    hotel.hotelName = hotelName;
    hotel.hotelAriName = hotelAriName;
    hotel.hotelRating = hotelRating;
    hotel.hotelPhoneNumber = hotelPhoneNumber;
    hotel.hotelEmail = hotelEmail;
    hotel.hotelFullAddress = hotelFullAddress;
    hotel.hotelLandmark = hotelLandmark;
    hotel.hotelCitySlug = hotelCitySlug;

    await hotel.save();

    res.status(200).json({ message: "Hotel updated successfully", hotel });
  } catch (error) {
    console.error("Error updating hotel:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await HotelInfoDetails.find();

    res.status(200).json({ hotels });
  } catch (error) {
    console.error("Error getting hotels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editHotel = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {hotelImage,
      hotelName,
      hotelAriName,
      hotelRating,
      hotelPhoneNumber,
      hotelEmail,
      hotelFullAddress,
      hotelLandmark,
      hotelCitySlug,
    } = req.body;

    let hotel = await HotelInfoDetails.findById(id);

    if(!hotel)
    {
      return res.status(404).json({error: "Hotel not found"});
    }
    hotel.hotelImage = hotelImage;
    hotel.hotelName = hotelName;
    hotel.hotelAriName = hotelAriName;
    hotel.hotelRating = hotelRating;
    hotel.hotelPhoneNumber = hotelPhoneNumber;
    hotel.hotelEmail = hotelEmail;
    hotel.hotelFullAddress = hotelFullAddress;
    hotel.hotelLandmark = hotelLandmark;
    hotel.hotelCitySlug = hotelCitySlug;

    await hotel.save();

    res.status(200).json({message: "Hotel updated successfully", hotel});
  } catch (error) {
    res.status(500).json({error: "Internal server error"});
  }
  
}
