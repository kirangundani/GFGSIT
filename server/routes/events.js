const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const auth = require('../middleware/auth');
const { validateEvent } = require('../middleware/validation');

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new event (only for chairman)
router.post('/', auth, validateEvent, async (req, res) => {
    try {
        if (req.user.role !== 'chairman') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const { title, description, date, time, location, image } = req.body;

        const newEvent = new Event({
            title,
            description,
            date,
            time,
            location,
            image,
            createdBy: req.user.id,
        });

        const event = await newEvent.save();
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update an event (only for chairman)
router.put('/:id', auth, validateEvent, async (req, res) => {
    try {
        if (req.user.role !== 'chairman') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const { title, description, date, time, location, image } = req.body;

        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        event.title = title;
        event.description = description;
        event.date = date;
        event.time = time;
        event.location = location;
        event.image = image;

        await event.save();

        res.json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete an event (only for chairman)
router.delete('/:id', auth, async (req, res) => {
    try {
        // Check if the user is authorized
        if (req.user.role !== 'chairman') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        // Attempt to delete the event
        const event = await Event.findByIdAndDelete(req.params.id);

        // If the event is not found
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Respond with success
        res.json({ message: 'Event removed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;