const { chargeEventsController } = require("../controllers/eventControllers");

const chargeEvents = async (req, res) => {
  try {
    const data = await chargeEventsController();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { chargeEvents };
