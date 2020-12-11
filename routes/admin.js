const express = require("express");
const router = express.Router();


// Auth display admin welcome page
router.get("/", (req, res) => {
  res.send("Welcome to Admin Routes");
});

module.exports = router;