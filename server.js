// Imports express package and sets it up for use
const express = require("express");
//Path module to work with directory and file paths
const path = require("path");
//Starts the http server to except request and send resposne
const app = express();
// Imports apiRoutes and htmlRoutes js files and sets it up for use
const apiRoutes = require("./app/routing/apiRoutes.js");
const htmlRoutes = require("./app/routing/htmlRoutes.js");

//Define port for the server to listen for request
const PORT = process.env.PORT || 8080;

//Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets our server to use public directory for static assets
app.use(express.static('app/public'));

// Routes
app.use(apiRoutes);
app.use(htmlRoutes);

//Starts the server at the predefined port
app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
})
