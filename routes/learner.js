const express = require("express");
const router = express.Router();;


// Route to display Leaner welcome page
router.get("/", (req, res) => {
  res.send("Welcome to Learner Routes");
});

// Route to view modules.
router.get("modules", (req, res) => {
  res.render("modules");
});


module.exports = router;