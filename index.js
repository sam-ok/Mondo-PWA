const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

// create express app
const app = express();

// middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Set view Engines
app.set("view engine", "ejs");
app.set("view engine", "pug");


// Specify where the engine is to pick views 
let joinedPath = path.join(__dirname, "views");
app.set('views', joinedPath);


// database
const CONNECTION_URL =
  "mongodb+srv://mondo:mondo123@cluster0.hhwq2.mongodb.net/mondo-db?retryWrites=true&w=majority";

// port 
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`)))
    .catch((error)=> console.log(error.message));

mongoose.set("useFindAndModify", false);

// Creating the Home Route
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Importing Routes
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const learnerRoutes = require('./routes/learner');
app.use('/learner', learnerRoutes);

const teacherRoutes = require('./routes/teacher');
app.use('/teacher', teacherRoutes);

