const { getEventDetailController } = require("../controllers/eventControllers");

const getEventDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getEventDetailController(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getEventDetail,
};
