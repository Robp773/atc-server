const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/test", (req, res) => {
console.log("endpoint hit", req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
