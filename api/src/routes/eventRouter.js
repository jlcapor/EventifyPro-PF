const {Router} = require("express");
const {getEventsHandler} = require("../handlers/getEventsHandler");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);

module.exports = eventRouter;