const { Router } = require("express");
const { getEventsHandler } = require("../handlers/getEventsHandler");
const { getDetailByIdHandler } = require("../handlers/getDetailByIdHandler");
const { createTicketHandler } = require("../handlers/createTicketHandler");
const { createEventHandler } = require("../handlers/createEventHandler");
const { validateEvent } = require("../utiles/validate");
const { getEventTypesHandler } = require("../handlers/getEventTypesHandler");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);
eventRouter.get("/eventtype", getEventTypesHandler);
eventRouter.post("/ticket", createTicketHandler);
eventRouter.post("/", validateEvent, createEventHandler);
eventRouter.get("/:id", getDetailByIdHandler);

module.exports = eventRouter;
