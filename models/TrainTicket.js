const mongoose = require('mongoose');

const trainTicketSchema = new mongoose.Schema({
    pickup: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

module.exports = mongoose.model('TrainTicket', trainTicketSchema);
