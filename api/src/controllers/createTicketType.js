const { Events, TicketTypes } = require("../db");

const createTicketType = async (name, price, stock, description, image, state, events) => {
  try {
    const eventInstance = await Events.findOne({
      where: { title: events },
    });

    if (!eventInstance) {
      throw new Error("Event does not exist");
    }

    const newTicketType = await TicketTypes.create({
      name,
      price,
      stock,
      description,
      image,
      state,
      EventId: eventInstance.id,
    });

    const eventData = {
      id: eventInstance.id,
      title: eventInstance.title,
    };

    return {  ticketType: [newTicketType, eventData] }
 
    return newTicket;
  } catch (error) {
    throw new Error("Unable to create this ticket: " + error.message);
  }
};

module.exports = { createTicketType };
