const express = require("express");
const router = express.Router();

const {
  addDoctor,
  getDoctors,
} = require("../controllers/doctorController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, addDoctor);
router.get("/", getDoctors);

module.exports = router;