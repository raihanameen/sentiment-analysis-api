"use strict";
var http = require("http");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var fs = require("fs");
const routes = require("./routes/nlp");
var path = require("path");

const swaggerConfig = require("./config/swagger");

//Configuring the Express Middleware
var app = express();
const expressSwagger = require("express-swagger-generator")(app);
expressSwagger(swaggerConfig(__dirname, port));

// var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'})

//Configure Morgan's Logging Formats
// app.use(morgan('common', {stream: accessLogStream}))    //UNCOMMENT TO ENABLE FILE LOGGING
app.use(morgan("common"));

//Set PORT to Dynamic Environments to run on any Server
var port = process.env.PORT || 3001;

//Configure Express to Recieve JSON and extended URLencoded formats
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(
  cors({
    exposedHeaders: "*",
  })
);

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
//Set RESTful routes

app.get("/", function (req, res) {
  res.status(200).json({
    status: "success",
  });
});
//Route for GET

app.use("/api/v1", routes);
//Route for file uploads

app.listen(port);
console.log("Server started successfully at PORT : " + port);
//module.exports=app;
