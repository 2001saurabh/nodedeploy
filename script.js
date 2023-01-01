const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("api working");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});

module.exports = app;
