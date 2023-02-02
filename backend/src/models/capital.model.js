const { db } = require("./db");

async function getAllCapitals() {
  const [rows] = await db.query("SELECT * FROM capitals");

  return rows;
}

module.exports = {
  getAllCapitals,
};
