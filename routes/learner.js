const express = require("express");
const Test = require("../modals/Test");
const router = express.Router();;


// Route to display Leaner welcome page
router.get("/", (req, res) => {
  res.send("Welcome to Learner Routes");
});

// Route to view modules.
router.get("/modules", (req, res) => {
  res.render("modules.ejs");
});

//Test routes.
router.get('/test', (req, res) => {
    res.render('test.ejs')
});

//Saving data to the database.
router.post('/test', async (req, res) => {
    try {
        const test = new Test(req.body);
        await Test.save();
        res.render('test');
    }
    catch (err) {
        res.send('Sorry, something went wrong!');
    }
});

module.exports = router;