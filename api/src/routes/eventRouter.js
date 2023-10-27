const { Router } = require("express");
const { getEventsHandler } = require("../handlers/getEventsHandler");
const { getDetailByIdHandler } = require("../handlers/getDetailByIdHandler");
const { getEventTypesHandler } = require("../handlers/getEventTypesHandler");
const { createEventHandler } = require("../handlers/createEventHandler");
const { validateEvent } = require("../utiles/validate");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);
eventRouter.get("/types", getEventTypesHandler);
eventRouter.post("/", validateEvent, createEventHandler);
eventRouter.get("/:id", getDetailByIdHandler);

module.exports = eventRouter;
