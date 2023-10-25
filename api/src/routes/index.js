const { Router } = require("express");
const eventRouter = require("./eventRouter");

const router = Router();

router.get("/events", eventRouter);

module.exports = router;
