const { Router } = require("express");
const { getEventsHandler } = require("../handlers/getEventsHandler");
const { getDetailByIdHandler } = require("../handlers/getDetailByIdHandler");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);
eventRouter.get("/:id", getDetailByIdHandler);

module.exports = eventRouter;
