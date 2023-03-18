const express = require("express");
const router = express.Router();

const { getAllBookings, addBooking } = require("../controllers/bookings");

router.route("/").get(getAllBookings);
router.route("/").post(getAllBookings);

module.exports = router;
