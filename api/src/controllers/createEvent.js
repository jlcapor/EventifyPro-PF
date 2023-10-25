const { Events, EventTypes } = require("../db");

async function createEvent(title, location, date, description, image, status, eventType) {
  try {
    
    const existingEvent = await Events.findOne({ where: { title, date } });
    if (existingEvent) {
      throw new Error("An event with the same name and date already exists");
    }

    const eventTypeInstance = await EventTypes.findOne({
      where: { name: eventType },
    });

    if (!eventTypeInstance) {
      throw new Error("Event type does not exist");
    }

  
    const newEvent = await Events.create({
      title,
      location,
      date,
      description,
      image,
      status,
      EventTypeId: eventTypeInstance.id,
    });

    
    const eventTypeData = {
      id: eventTypeInstance.id,
      name: eventTypeInstance.name,
    };
    console.log(eventTypeData.name)

    
    return { event: [newEvent, eventTypeData] };
  } catch (error) {
    throw new Error("Unable to create this event: " + error.message);
  }
}

module.exports = { createEvent };


