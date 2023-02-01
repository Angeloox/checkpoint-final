const express = require("express");
const { capitalRouter } = require("./capital.route");

const router = express.Router();

router.use("/api/capitals", capitalRouter);

module.exports = router;
