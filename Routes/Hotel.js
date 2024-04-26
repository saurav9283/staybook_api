import express from "express";
import {
  createHotel,
  getHotels,
  editHotel,
  updatedHotel,
} from "../controller/hotel.js";

const router = express.Router();

// create
router.post("/", createHotel)
//update
router.put("/:id", updatedHotel)
//get all hotels
router.get("/", getHotels)
//edit hotel
router.patch("/:id", editHotel)

export default router;