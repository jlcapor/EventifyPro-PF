const axios = require("axios");
const { EventTypes } = require("../db");

const URL = "http://localhost:5000/EventTypes/";

const getEventTypes = async () => {
  const check = EventTypes.findAll();
  if (check != []) {
    return check;
  } else {
    const apiEventTypes = (await axios.get(URL)).data;
    await EventTypes.bulkCreate(apiEventTypes);
    const check = EventTypes.findAll();
    return check;
  }
};

module.exports = { getEventTypes };
