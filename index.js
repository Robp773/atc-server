const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.post("/test", (req, res) => {
  console.log("endpoint hit", req);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
