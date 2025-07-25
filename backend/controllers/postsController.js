const { sql, pool, poolConnect } = require("../db");

const getAllPosts = async (req, res) => {
  try {
    await poolConnect;
    const result = await pool.request().query("SELECT * FROM Posts");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("DB error");
  }
};

const getPostById = async (req, res) => {
  try {
    await poolConnect;
    const { id } = req.params;
    const result = await pool.request().input("id", sql.Int, id).query("SELECT * FROM Posts WHERE id = @id");

    if (result.recordset.length === 0) {
      return res.status(404).send("Post not found");
    }

    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).send("DB error");
  }
};

const createPost = async (req, res) => {
  try {
    await poolConnect;
    const { title, content } = req.body;

    await pool.request().input("title", sql.NVarChar(255), title).input("content", sql.Text, content).query("INSERT INTO Posts (title, content) VALUES (@title, @content)");

    res.status(201).send("Post created");
  } catch (err) {
    res.status(500).send("DB error");
  }
};

const updatePost = async (req, res) => {
  try {
    await poolConnect;
    const { id } = req.params;
    const { title, content } = req.body;

    await pool.request().input("id", sql.Int, id).input("title", sql.NVarChar(255), title).input("content", sql.Text, content).query("UPDATE Posts SET title = @title, content = @content WHERE id = @id");

    res.send("Post updated");
  } catch (err) {
    res.status(500).send("DB error");
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost };
