// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const RecruitmentUrl = require('../models/UrlSchema');
// const auth = require('../middleware/auth'); // Make sure you have this middleware

// // Get current recruitment URL
// router.get('/', async (req, res) => {
//     try {
//         // Fetch the most recent recruitment URL
//         const recruitmentUrl = await RecruitmentUrl.findOne().sort({ createdAt: -1 });

//         // If no recruitment URL is found, return a 404
//         if (!recruitmentUrl) {
//             return res.status(404).json({ message: 'No recruitment URL found' });
//         }

//         res.json(recruitmentUrl);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// // Create or update recruitment URL (only for chairman)
// router.post('/', auth, async (req, res) => {
//     try {
//         // Check if the user is authorized (chairman only)
//         if (req.user.role !== 'chairman') {
//             return res.status(403).json({ message: 'Not authorized' });
//         }

//         const { url, description } = req.body;

//         // Validate inputs
//         if (!url) {
//             return res.status(400).json({ message: 'URL is required' });
//         }

//         // Create a new recruitment URL document
//         const newRecruitmentUrl = new RecruitmentUrl({
//             url,
//             description: description || '',
//             createdBy: req.user.id
//         });

//         // Save the new recruitment URL
//         const recruitmentUrl = await newRecruitmentUrl.save();

//         res.status(201).json(recruitmentUrl);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const RecruitmentUrl = require('../models/UrlSchema');
const auth = require('../middleware/auth');

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
router.post('/', auth, async (req, res) => {
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

// Delete recruitment URL (only for chairman)
router.delete('/:id', auth, async (req, res) => {
    try {
        // Check if the user is authorized (chairman only)
        if (req.user.role !== 'chairman') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const recruitmentUrlId = req.params.id;

        // Find and delete the recruitment URL
        const deletedRecruitmentUrl = await RecruitmentUrl.findByIdAndDelete(recruitmentUrlId);

        if (!deletedRecruitmentUrl) {
            return res.status(404).json({ message: 'Recruitment URL not found' });
        }

        res.json({ message: 'Recruitment URL deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;