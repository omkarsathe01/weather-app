import { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from "../services/api";
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const Container = styled(Box) ({
    background: '#445A6F',
    padding: 10,
    borderRadius: '0 20px 0 0'
});

const Input = styled(InputBase) ({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18
});

const GetButton = styled(Button) ({
    background: '#e67e22',
});

const Form = ({ setResult }) => {
    const [data, setData] = useState({})

    const handleChange = (e) => {
        console.log(e.target);
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return (
        <Container>
            <Input 
                placeholder = "Enter City Name"
                onChange={(e) => handleChange(e)}
                name = "city"
            />
            <Input 
                placeholder = "Enter Country Name"
                onChange={(e) => handleChange(e)}
                name = "country"
            />
            {/* <DateRangePicker
                startText = "Check-in"
                endText = "Check-out"
                onChange={(e) => handleChange(e)}
                name = "date"
            /> */}
            {/* <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} /> */}
            <GetButton
                variant="contained"
                onClick={() => getWeatherInfo()}
            >Get Weather</GetButton>
        </Container>
    )
};

export default Form;