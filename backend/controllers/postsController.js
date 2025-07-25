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

module.exports = { getAllPosts, getPostById };
