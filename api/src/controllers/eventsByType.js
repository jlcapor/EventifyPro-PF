const { Events, EventTypes } = require("../db");

const eventsByType = async (name) => {
    const getEvents = await Events.findAll({
      include: {
        where: { name: name },
        model: EventTypes,
        attributes: ['name'],
      }
    })
  
    const allEvents = getEvents.map(event => {
      return {
          id: event.id,
          title: event.title,
          location: event.location,
          date: event.date,
          description: event.description,
          image: event.image,
          eventType: event.EventType ? event.EventType.name : null   //.toString()
      }
    })
  
    return allEvents;
  }


  module.exports = {
    eventsByType,
  };