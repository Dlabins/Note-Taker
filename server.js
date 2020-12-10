// Require express, fs, and path
const express = require("express");
const fs = require("fs");
const path = require('path');

// Make express server and port
const app = express();
const PORT = process.env.PORT || 8080;

// setup express for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require the route
require('./routes/routes')(app);

// Made listener for the port
app.listen(PORT, function() {
    console.log("Note Taker listening on PORT: " + PORT);
});  