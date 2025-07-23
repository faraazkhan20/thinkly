require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sql, pool, poolConnect } = require("./db");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/posts", async (req, res) => {
  try {
    await poolConnect;
    const result = await pool.request().query("SELECT * FROM Posts");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("DB error");
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.send("Thinkly backend is running!");
});

app.get("/api/test", (req, res) => {
  res.send("apple!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
