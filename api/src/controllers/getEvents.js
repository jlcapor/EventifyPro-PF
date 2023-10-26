const {Events, EventTypes} = require("../db")

const getEvents = async () => {
  const events = await Events.findAll({
    include: {
        model: EventTypes,
        attributes: ['name'],
    }
});


const allEvent = events.map(event => {
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

return allEvent;
};

module.exports = { getEvents };
