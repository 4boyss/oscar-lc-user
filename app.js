var express = require("express");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

var app = express();

// Install middleware to parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route handler

app.use("/api/v1/lc_SignUpNRead", require("./routers/lc_SignUpNRead"));

app.use("/api/v1/lc_logIn", require("./routers/lc_logIn"));

app.use("/api/v1/lc_logOut", require("./routers/lc_logOut"));

app.get("/", function(req, res) {
  res.send("hello");
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
