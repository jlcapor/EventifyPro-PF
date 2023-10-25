const validateEvent = (req, res, next) => {
    const { image, title, location, date, description, status } = req.body;
    if (!image) return res.status(500).json({ error: "MISSING IMAGE" });
    if (!title) return res.status(500).json({ error: "MISSING TITLE" });
    if (!location) return res.status(500).json({ error: "MISSING LOCATION" });
    if (!date) return res.status(500).json({ error: "MISSING DATE" });
    if (!description)
      return res.status(500).json({ error: "MISSING DESCRIPTION" });
    if (!status) return res.status(500).json({ error: "MISSING STATUS" });
    next();
  };
  
  module.exports = {validateEvent};