const express = require("express");
const {
  getUserDetails
} = require("../../controllers/user-controller/user-details");
const router = express.Router();

router.get("/get/:userId", getUserDetails);

module.exports = router;