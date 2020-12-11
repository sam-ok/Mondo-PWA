const express = require("express");
const router = express.Router();;


// Route to display Leaner welcome page
router.get("/", (req, res) => {
  res.send("Welcome to Learner Routes");
});

module.exports = router;