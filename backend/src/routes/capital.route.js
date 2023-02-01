const { Router } = require("express");
const capitalController = require("../controllers/capital.controller");

const capitalRouter = new Router();

capitalRouter.get("/", capitalController.list);

module.exports = { capitalRouter };
