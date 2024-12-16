const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validateSignup, validateLogin } = require('../middleware/validation');

const RecruitmentUrl = require('../models/UrlSchema')

router.post('/signup', validateSignup, async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ name, email, password, role });
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
router.post('/login', validateLogin, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token, role: user.role });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Get current recruitment URL
router.get('/', async (req, res) => {
    try {
        // Fetch the most recent recruitment URL
        const recruitmentUrl = await RecruitmentUrl.findOne().sort({ createdAt: -1 });

        // If no recruitment URL is found, return a 404
        if (!recruitmentUrl) {
            return res.status(404).json({ message: 'No recruitment URL found' });
        }

        res.json(recruitmentUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create or update recruitment URL (only for chairman)
router.post('/', async (req, res) => {
    try {
        // Check if the user is authorized (chairman only)
        if (req.user.role !== 'chairman') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const { url, description } = req.body;

        // Validate inputs
        if (!url) {
            return res.status(400).json({ message: 'URL is required' });
        }

        // Create a new recruitment URL document
        const newRecruitmentUrl = new RecruitmentUrl({
            url,
            description: description || '',
            createdBy: req.user.id
        });

        // Save the new recruitment URL
        const recruitmentUrl = await newRecruitmentUrl.save();

        res.status(201).json(recruitmentUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

