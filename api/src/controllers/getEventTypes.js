const axios = require("axios");
const {EventTypes} = require("../db")

const URL = "http://localhost:5000/EventTypes/";

const getEventTypes = async () => {
  const apiEventTypes = (await axios.get(URL)).data;
  await EventTypes.bulkCreate(apiEventTypes);
  const check = EventTypes.findAll();
//   if (check) {
//     return "SE CARGARON LOS EventTypes CORRECTAMENTE EN BDD";
//   } else return "HUBO UN ERROR PARA CARGAR LOS DATOS EN BDD";
  return apiEventTypes;
};

module.exports = { getEventTypes };