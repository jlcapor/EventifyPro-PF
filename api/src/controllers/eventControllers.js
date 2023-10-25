const axios = require("axios");

const URL = "http://localhost:5000/Eventos/";

const chargeEventsController = async () => {
  const apiEvents = (await axios.get(URL)).data;
  // await Event.bulkCreate(apiEvents);
  // const check = Event.findAll();
  // if (check) {
  //   return "SE CARGARON LOS EVENTOS CORRECTAMENTE EN BDD";
  // } else return "HUBO UN ERROR PARA CARGAR LOS DATOS EN BDD";
  return apiEvents;
};

const getEventDetailController = async (id) => {
  const { data } = await axios.get(`${URL}${id}`);
  // const eventId = await Events.findByPk(id, {});
  // return eventId;

  return data;
};

module.exports = {
  chargeEventsController,
  getEventDetailController,
};
