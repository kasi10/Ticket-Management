const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for bus tickets
const BusTicketSchema = new Schema({
    pickup: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }
});

// Create a model for bus tickets
const BusTicket = mongoose.model('BusTicket', BusTicketSchema);

module.exports = BusTicket;
