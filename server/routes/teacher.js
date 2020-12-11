const express = require("express");
const router = express.Router();;


// Auth display Teacher welcome page
router.get("/", (req, res) => {
  res.send("Welcome to Teacher Routes");
});

module.exports = router;