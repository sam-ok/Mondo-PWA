const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// create express app
const app = express();

// middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// database
const CONNECTION_URL =
  "mongodb+srv://mondo:mondo123@cluster0.hhwq2.mongodb.net/mondo-db?retryWrites=true&w=majority";

// port 
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`)))
    .catch((error)=> console.log(error.message));

mongoose.set("useFindAndModify", false);
