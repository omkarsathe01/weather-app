const { getWeather } = require('../../modules/weather/weather.module');
const logger = require('../../modules/logger/logger.module');

// Define a weather controller
async function weatherController(req, res) {
    try {
        // Extract the city and country from the query parameters
        const getWeatherParams = {
            city: req.query.city,
            country: req.query.country,
        };

        // Call the weather module to get the weather data
        return res.status(200).json(await getWeather(getWeatherParams));
    } catch (error) {
        // Handle and log any errors
        logger.error('weatherController', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    weatherController,
}