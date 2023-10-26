const {EventTypes} = require("../db")

const getEventTypes = async () => {
  const eventType = await EventTypes.findAll();
  return eventType;
};

module.exports = { getEventTypes };