import { Box, Typography, styled } from "@mui/material";
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from "@mui/icons-material";
import DateComponent from "./Date";

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10,
    }
});

const Blank = styled(Typography)({
    color: 'red',
    margin: '30px 60px',
    fontSize: 20,
    letterSpacing: 2,
})


const Information = ({ result }) => {
    return (
        result && Object.keys(result).length > 0 ?
        <Box style = {{margin: '30px 60px' }}>
            <Row><DateComponent /></Row>
            <Row><LocationOn />Location: {result.city}, {result.country} [{result.coord.lat}, {result.coord.lon}] </Row>
            <Row><SettingsBrightness />Temperature: {result.temperature.current} ({result.temperature.min} - {result.temperature.max})</Row>
            <Row><Opacity />Humidity: {result.humidity.value}</Row>
            <Row><Brightness5 />Sun Rise: {result.sun.rise}</Row>
            <Row><Brightness6 />Sun Set: {result.sun.set}</Row>
            <Row><Dehaze />Humidity: {result.humidity.desc}</Row>
            <Row><Cloud />Clouds: {result.humidity.clouds}%</Row>
        </Box>
        : <Blank>Nothing to show here!</Blank>
    )
}

export default Information;