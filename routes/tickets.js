// routes/tickets.js
const express = require('express');
const router = express.Router();

// Import the Ticket, BusTicket, and TrainTicket models
const Ticket = require('../models/Ticket');
const BusTicket = require('../models/BusTicket');
const TrainTicket = require('../models/TrainTicket');

// Get all movie tickets
router.get('/movie-tickets', async (req, res) => {
    try {
        const movieTickets = await Ticket.find({ description: 'Movie booking' });
        res.status(200).json(movieTickets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie tickets' });
    }
});

// Delete a movie ticket by ID
router.delete('/movie-tickets/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).json({ error: 'Movie ticket not found' });
        }
        res.status(200).json({ message: 'Movie ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete movie ticket' });
    }
});

// Get all bus tickets
router.get('/bus-tickets', async (req, res) => {
    try {
        const busTickets = await BusTicket.find();
        res.status(200).json(busTickets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bus tickets' });
    }
});

// Delete a bus ticket by ID
router.delete('/bus-tickets/:id', async (req, res) => {
    try {
        const ticket = await BusTicket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).json({ error: 'Bus ticket not found' });
        }
        res.status(200).json({ message: 'Bus ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete bus ticket' });
    }
});

// Get all train tickets
router.get('/train-tickets', async (req, res) => {
    try {
        const trainTickets = await TrainTicket.find();
        res.status(200).json(trainTickets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch train tickets' });
    }
});

// Delete a train ticket by ID
router.delete('/train-tickets/:id', async (req, res) => {
    try {
        const ticket = await TrainTicket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).json({ error: 'Train ticket not found' });
        }
        res.status(200).json({ message: 'Train ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete train ticket' });
    }
});

// Create a new movie ticket
router.post('/book-movie', async (req, res) => {
    const { title, date, time, tickets } = req.body;
    try {
        const newBooking = new Ticket({
            title,
            description: 'Movie booking',
            date: new Date(date),
            time,
            price: 100, // Set the price as needed
            tickets // Add tickets field
        });
        await newBooking.save();
        res.status(201).json({ message: 'Movie booked successfully', booking: newBooking });
    } catch (error) {
        res.status(500).json({ error: 'Failed to book movie' });
    }
});

// Create a new bus ticket
router.post('/book-bus', async (req, res) => {
    const { pickup, destination, date, time } = req.body;
    try {
        const newBusTicket = new BusTicket({
            pickup,
            destination,
            date: new Date(date),
            time,
        });
        await newBusTicket.save();
        res.status(201).json({ message: 'Bus ticket booked successfully', ticket: newBusTicket });
    } catch (error) {
        res.status(500).json({ error: 'Failed to book bus ticket' });
    }
});

// Create a new train ticket
router.post('/book-train', async (req, res) => {
    const { pickup, destination, date, time } = req.body;
    try {
        const newTrainTicket = new TrainTicket({
            pickup,
            destination,
            date: new Date(date),
            time,
        });
        await newTrainTicket.save();
        res.status(201).json({ message: 'Train ticket booked successfully', ticket: newTrainTicket });
    } catch (error) {
        res.status(500).json({ error: 'Failed to book train ticket' });
    }
});

module.exports = router;
