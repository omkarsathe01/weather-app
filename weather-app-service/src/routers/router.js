const express = require('express');
const logger = require('../modules/logger/logger.module');
const { weatherController } = require('../controllers/weather/weather.controller');

const router = express.Router();

// Define a route with a GET /weather request
router.get('/weather', async (req, res) => {
    try {
        // Call the weather controller function
        await weatherController(req, res);

        // Log a successful request
        logger.info('GET request to /weather was successful');
    } catch (error) {
        // Handle and log any errors
        logger.error('Error in GET request to /weather', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;