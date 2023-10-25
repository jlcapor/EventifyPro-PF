const { Router } = require("express");
const { chargeEvents } = require("../handlers/eventHandlers");
const { getDetailByIdHandler } = require("../handlers/getDetailByIdHandler");

const router = Router();

router.get("/events", chargeEvents);
router.get("/events/:id", getDetailByIdHandler);

module.exports = router;
