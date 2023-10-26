const { Router } = require("express");
const { getEventTypesHandler } = require("../handlers/getEventTypesHandler");


const eventTypeRouter = Router();

eventTypeRouter.get("/", getEventTypesHandler);

module.exports = eventTypeRouter;
