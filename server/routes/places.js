const express = require("express");
const router = express.Router();

const {
  getAllPlaces,
  addPlace,
  getSinglePlace,
  updatePlace,
} = require("../controllers/places");

router.route("/").get(getAllPlaces);
router.route("/").post(addPlace);
router.route("/:id").get(getSinglePlace);
router.route("/").put(updatePlace);

module.exports = router;
