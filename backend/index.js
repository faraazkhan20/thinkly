require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Thinkly backend is running!");
});

app.get("/api/test", (req, res) => {
  res.send("apple!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
