// Require Packages
const express = require("express");
const User = require("../modals/userModal")
const router = express.Router();



// Auth display login page
router.get("/login", (req, res) => {
  res.render("login.ejs");
});

// Auth display signup page
router.get("/register", (req, res) => {
  res.render("signup.ejs");
});

// submits a login page information
router.post("/login", async (req, res) => {
  console.log("Form submitted Successfully");
  console.log(req.body)
   res.render("welcome.ejs");
   try {
     const user = await User.authenticate(
       req.body.username,
       req.body.password
     );
     // res.send("hey " + user.firstname + " " + user.lastname)
    //  req.session.user = user;
     if(user){
       res.render("welcome.ejs"); //not good to use
     }
   } catch {
     // res.send("Login Failed")
     // res.redirect('register')
     res.render("login.ejs", { error: "Failed to login, Please try again" });
   }
 
});


router.post("/register", (req,res) => {
   const myData = new User(req.body);
   console.log(myData);
   myData
     .save()
     .then((item) => {
       User.find().then((items) => {
         console.log("User was registered Successfully");
         res.redirect("/auth/login");
       });
     })
     .catch((err) => {
       console.log(err);
       res.status(400).send("unable to save to database");
     });
});
//Export routes
module.exports = router;
