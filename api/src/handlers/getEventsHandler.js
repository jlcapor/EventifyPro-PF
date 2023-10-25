const { getEvents } = require("../controllers/getEvents");

const getEventsHandler = async (req, res) => {
  try {
    const data = await getEvents();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getEventsHandler };
