import axios from 'axios';

export const getWeather = async (city, country) => {
    const url = `http://localhost:8080/weather?city=${city}&country=${country}`;

    let response = await axios.get(url);

    return response.data;
}