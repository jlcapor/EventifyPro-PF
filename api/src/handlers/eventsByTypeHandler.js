const {eventsByType} = require('../controllers/eventsByType')

const getEventsByIdHandler = async (req, res) => {
    const {name} = req.query;
    try {
      const response = await eventsByType(name);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = { getEventsByIdHandler };