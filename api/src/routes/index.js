const { Router } = require("express");
const { chargeEvents } = require("../handlers/eventHandlers");
const { getEventDetail } = require("../handlers/getDetailEventHandler");

const router = Router();

router.get("/events", chargeEvents);
router.get("/events/:id", getEventDetail);

module.exports = router;
