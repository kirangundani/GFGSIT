const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.js');
const eventRoutes = require('./routes/events.js');
const recruitmentUrlRoutes = require('./routes/recruitmentUrl.js'); // Correct import path
const mailpath = require('./routes/mailPath.js');

dotenv.config();

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/recruitment-url', recruitmentUrlRoutes);
app.use('/api/mailpath', mailpath)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));