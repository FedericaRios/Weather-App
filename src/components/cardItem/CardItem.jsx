import React from 'react';
import './styles.css';
import { WiDayCloudy, WiCloudy, WiDaySunny, WiRain, WiSnow, } from "react-icons/wi";

const CardItem = ({
    weather,
    tempMax,
    tempMin,
    dayName
}) => {
    const dayNumber = new Date(dayName * 1000).getDay();

    const renderDay = () => {
        switch (dayNumber) {
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            case 0:
                return 'Sunday';
            default:
                return '';
        }
    }

    const typeWeather = weather[0].main;

    const renderWeather = () => {
        switch (typeWeather) {
            case 'Clouds Clear':
                return <WiDayCloudy />;
            case 'Clouds':
                return <WiCloudy />;
            case "Clear":
                return <WiDaySunny />;
            case 'Rain':
                return <WiRain />;
            case 'Snow':
                return <WiSnow />;
            default:
                return <WiDaySunny />;
        }
    }

    return (
        <div className="container-Item">
            <h1 className="render-day">
                {renderDay()}
            </h1>
            {<h1 className="temperatura-max">
                Max: {tempMax}°C
            </h1>}
            {<h1 className="temperatura-min">
                Min: {tempMin}°C
            </h1>}
            <div className="render-weather">
                {renderWeather()}
            </div>

        </div>
    )
};

export default CardItem;


