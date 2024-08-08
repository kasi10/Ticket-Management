const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true },
    tickets: { type: Number } // Add tickets field
});

module.exports = mongoose.model('Ticket', ticketSchema);
