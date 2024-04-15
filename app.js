const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var nd = req.body.namaDepan;
  var nb = req.body.namaBelakang;
  var em = req.body.email;
});

app.listen(3001, function () {
  console.log("start at 3001");
});


//api key
// 0ce9b6b29f36b4591c4be74d9cad8a57-us10

//