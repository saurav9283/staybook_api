import express from "express";
import {
  createHotel,
  getHotels,
  updatedHotel,
} from "../controller/hotel.js";

const router = express.Router();

// create
router.post("/", createHotel)
//update
router.put("/:id", updatedHotel)
router.get("/", getHotels)

export default router;