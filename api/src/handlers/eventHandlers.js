const {
  chargeEventsController,
  getEventDetailController,
} = require("../controllers/eventControllers");

const chargeEvents = async (req, res) => {
  try {
    const data = await chargeEventsController();

    return res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getEventDetail = async (req, res) => {
  let { id } = req.params;

  try {
    const data = await getEventDetailController(id);

    res.status(202).json(data);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = { chargeEvents, getEventDetail };
