const express = require("express");
const res = require("express/lib/response");
const app = express();
const _ = require("underscore");

app.use("/public", express.static("public"));

// embedded java script for templates
app.set("view engine", "ejs");

app.set("views", "./templates");

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you",
];

colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

app.get("/", (req, res) => {
  res.render("index", { message: "hello" });
});

app.get("/compliments", (req, res) => {
  rndCompliment = _.sample(compliments);
  rndColor = _.sample(colors);
  res.render("compliments", {
    rndCompliment: rndCompliment,
    rndColor: rndColor,
  });
  // res.send(
  //   "sample compliment : " + rndCompliment + "sample color: " + rndColor
  // );
});

app.listen(8080);
