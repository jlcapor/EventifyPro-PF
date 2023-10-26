const { Events, EventTypes } = require("../db");

const getDetailById = async (id) => {
  const event = await Events.findAll({
    where: {
        id: id
    },
    include: {
      model: EventTypes,
      attributes: ['name'],
  }
})

if (!event || event.length === 0) {
    throw new Error("The dog does not exist in the BD");
}

  const infoEevnt = event.map(event => {
    return {
     id: event.id,
     title: event.title,
     location: event.location,
     date: event.date,
     description: event.description,
     image: event.image,
     eventType: event.EventType ? event.EventType.name : null
    }
  })

  return  infoEevnt[0]

};

module.exports = {
  getDetailById,
};
