const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const apiKey = "cab6ca35ce09380c9c05476f227bb4de";
  const cityName = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey;

  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.feels_like;
      const desc = weatherData.weather[0].description;
      const icon =
        "http://openweathermap.org/img/wn/" +
        weatherData.weather[0].icon +
        "@2x.png";

      res.write("<p>the weather is currently " + desc + " </p>");
      res.write(
        "<h1>the temperature in " +
          cityName +
          " is " +
          temp +
          " degree Kelvin </h1>"
      );
      res.write("<img src=" + icon + " ></img>");
      res.send();
      console.log(weatherData);
    });
  });
});

app.post("/", function (req, res) {
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var bmi = w / (h * h);

  res.send("your bmi index is " + bmi);
});

app.listen(3001, function () {
  console.log("start at 3001");
});
