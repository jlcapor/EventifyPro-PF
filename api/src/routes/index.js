const { Router } = require("express");
const { chargeEvents } = require("../handlers/eventHandlers");

const router = Router();

router.get("/events", chargeEvents);

module.exports = router;
