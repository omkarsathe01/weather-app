const axios = require("axios");
const logger = require("../logger/logger.module");

// Sets the direction of the compass
function setDir(D, lng) {
    if(D < 0) {
        if(lng) {
            return "W";
        } else {
            return "S";
        }
    } else {
        if(lng) {
            return "E";
        } else {
            return "N";
        }
    }
};

// Converts decimal degrees to degrees, minutes, seconds
function ConvertDDToDMS(D, lng) {
    const obj = {
      dir: setDir(D, lng),
      deg: 0 | (D < 0 ? (D = -D) : D),
      min: 0 | (((D += 1e-9) % 1) * 60),
      sec: (0 | (((D * 60) % 1) * 6000)) / 100,
    };

    return `${obj.deg}°${obj.min}'${obj.sec}"${obj.dir}`;
};

// Fetch the openweathermap api and return the required response
async function getWeather(getWeatherParams) {
    try {
        const API_KEY = process.env.API_KEY;

        const city = getWeatherParams.city;
        const country = getWeatherParams.country;

        logger.debug(API_KEY)

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
    
        const getWeatherData = (await axios.get((url))).data;

        const latitud = ConvertDDToDMS(getWeatherData.coord.lat, false);
        const longitud = ConvertDDToDMS(getWeatherData.coord.lon, true);
    
        const responseObject = {
            city: getWeatherData.name,
            country: getWeatherData.sys.country,
            temperature: {
                current: getWeatherData.main.temp,
                min: getWeatherData.main.temp_min,
                max: getWeatherData.main.temp_max,
            },
            coord: {
                lon: longitud,
                lat: latitud,
            },
            humidity: {
                value: getWeatherData.main.humidity,
                desc: getWeatherData.weather[0].main,
                clouds: getWeatherData.clouds.all,
            },
            sun: {
                rise: new Date(getWeatherData.sys.sunrise * 1000).toLocaleTimeString(),
                set: new Date(getWeatherData.sys.sunset * 1000).toLocaleTimeString(),
            },
        };
    
        return responseObject;
    } catch (error) {
        // Handle and log any errors
        logger.error(error);
    }
}

module.exports = {
    getWeather,
}