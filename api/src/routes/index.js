const { Router } = require("express");
const { chargeEvents, getEventDetail } = require("../handlers/eventHandlers");

const router = Router();

router.get("/events", chargeEvents);
router.get("/events/:id", getEventDetail);

module.exports = router;
