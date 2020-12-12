const express = require("express");
const router = express.Router();;


// Auth display Teacher welcome page
router.get("/", (req, res) => {
  res.send("Welcome to Teacher Routes");
});

//Test results routes.
router.get('/testResults', (req, res) => {
  res.render('testResults.ejs')
});

module.exports = router;