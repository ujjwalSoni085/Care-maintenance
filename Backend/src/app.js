const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Error Handler Middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

module.exports = app;
