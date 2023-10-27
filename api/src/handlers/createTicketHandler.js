const { createTicketType } = require("../controllers/createTicketType")


const createTicketHandler = async (req, res) => {
    const { name, price, stock, description, image, state, event } =
        req.body;

    try {
        const newTicket = await createTicketType(
            name,
            price,
            stock,
            description,
            image,
            state,
            event
        );
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {createTicketHandler}