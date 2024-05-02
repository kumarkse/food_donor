const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static('images'));
app.set('view engine', 'ejs');

// Sample data - Replace this with your own data storage solution
let donars = [];
let volunteers = [];
let feedbacks = [];

// Routes
app.get("/", function(req, res) {
  res.render("index", { feeds: feedbacks });
});

app.get("/about", function(req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/RegisterLoginDonar", function(req, res) {
  res.render("p1", { warning: '' });
});

app.post("/RegisterLoginDonar", function(req, res) {
  // Registration/Login logic for donars
});

app.get("/RegisterLoginVolunteer", function(req, res) {
  res.sendFile(__dirname + "/contact.html")
});

// app.post("/RegisterLoginVolunteer", function(req, res) {
//   res.render("p1")
// });

// app.get("/finaldonate/:username", function(req, res) {
//   res.sendFile(__dirname + "/finaldonate.html");
// });

// app.post("/finaldonate/:username", function(req, res) {
//   // Donation submission logic
// });

// app.get("/donations", function(req, res) {
//   res.render("volunteer", { name: [] });
// });

// app.post("/donations", function(req, res) {
//   // Search and display donations logic
// });

// app.get("/foodDetails/:username", function(req, res) {
//   res.sendFile(__dirname + "/foodDetails.html");
// });

// app.post("/foodDetails/:username", function(req, res) {
//   // Add food details logic
// });

// app.post("/contact", function(req, res) {
//   // Contact form submission logic
// });

// Start the server
let port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server isstarted successfully");
});
