const axios = require("axios");

const URL = "http://localhost:5000/Eventos/";

const getDetailById = async (id) => {
  const { data } = await axios.get(`${URL}${id}`);
  // const eventId = await Events.findByPk(id, {});
  // return eventId;

  return data;
};

module.exports = {
  getDetailById,
};
