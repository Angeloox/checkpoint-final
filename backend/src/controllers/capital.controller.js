const capitalModel = require("../models/capital.model");

async function list(req, res) {
  const capitals = await capitalModel.getAllCapitals();
  res.json(capitals);
}

module.exports = { list };
