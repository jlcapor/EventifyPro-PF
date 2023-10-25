const { Router } = require("express");
const eventRouter = require("./eventRouter");

const router = Router();

router.use("/events", eventRouter);

module.exports = router;
