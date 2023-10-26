const axios = require("axios");
const { EventTypes } = require("../db");

const URL = "http://localhost:5000/EventTypes/";

const getEventTypes = async () => {
  const check = await EventTypes.findAll();
  if (!check.length) {
    const apiEventTypes = (await axios.get(URL)).data;
    await EventTypes.bulkCreate(apiEventTypes);
  }
  return check;
};

module.exports = { getEventTypes };
