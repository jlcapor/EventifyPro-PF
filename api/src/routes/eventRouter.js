const { Router } = require("express");
const { getEventsHandler } = require("../handlers/getEventsHandler");
const { getDetailByIdHandler } = require("../handlers/getDetailByIdHandler");
const { createTicketHandler } = require("../handlers/createTicketHandler");
const { createEventHandler } = require("../handlers/createEventHandler");
const { validateEvent } = require("../utiles/validate");
const {
  updateStatusEventHandler,
} = require("../handlers/updateStatusEventHandler");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);
eventRouter.post("/ticket", createTicketHandler);
eventRouter.post("/", validateEvent, createEventHandler);
eventRouter.put("/:id", updateStatusEventHandler);
eventRouter.get("/:id", getDetailByIdHandler);

module.exports = eventRouter;
