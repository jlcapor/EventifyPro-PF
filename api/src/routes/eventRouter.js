const { Router } = require("express");
const { getEventsHandler } = require("../handlers/getEventsHandler");
const { getDetailByIdHandler } = require("../handlers/getDetailByIdHandler");
const { getEventsByIdHandler } = require("../handlers/eventsByTypeHandler");


const eventRouter = Router();

eventRouter.get("/", getEventsHandler);
eventRouter.get("/:id", getDetailByIdHandler);
eventRouter.get("/eventsByType", getEventsByIdHandler);

module.exports = eventRouter;
