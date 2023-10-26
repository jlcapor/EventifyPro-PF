const axios = require("axios");
const { Event } = require("../db");

const URL = "http://localhost:5000/Eventos";

const getEvents = async () => {
  const apiEvents = (await axios.get(URL)).data;
  // await Event.bulkCreate(apiEvents);
  // const check = Event.findAll();
  // if (check) {
  //   return "SE CARGARON LOS EVENTOS CORRECTAMENTE EN BDD";
  // } else return "HUBO UN ERROR PARA CARGAR LOS DATOS EN BDD";
  return apiEvents;
};

const getEventsByName = async (name) => {
const eventsFound = await Event.findaAll({
  where: {
    title : {[Op.iLike] : `%${name}%`}
  },
});
return eventsFound;
}

module.exports = { getEvents, getEventsByName };
