import React from 'react';
import './styles.css';
import clearSky from '../../assets/clear-sky.png';
import Sunny from '../../assets/sunny.png';
import Cloudy from '../../assets/cloudy.png';
import Rain from '../../assets/rain.png';
import Snow from '../../assets/snow.png';

const CardItem = ({
    weather,
    tempMax,
    tempMin,
    dayName,
    setSelectedDay
}) => {
    const dayNumber = new Date(dayName * 1000).getDay();
    const typeWeather = weather[0].main;

    const renderDay = (dayNumber) => {
        const weekDays = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
        };

        const day = weekDays[dayNumber] || '';

        return day;
    };

    const renderWeather = (typeWeather) => {
        const weatherIcons = {
            'Clouds Clear': <img src={clearSky} alt="Clouds Clear" style={{ width: "50%", height: "50%" }} />,
            'Clouds': <img src={Cloudy} alt="Clouds" style={{ width: "40%", height: "40%" }} />,
            'Clear': <img src={Sunny} alt="Clear" style={{ width: "50%", height: "50%" }} />,
            'Rain': <img src={Rain} alt="Rain" style={{ width: "40%", height: "40%" }} />,
            'Snow': <img src={Snow} alt="Snow" style={{ width: "40%", height: "40%" }} />,
        };

        const weatherIcon = weatherIcons[typeWeather] || <img src={clearSky} alt="Clouds Clear" style={{ width: "50%", height: "50%" }} />;

        return weatherIcon;
    };

    return (
        <div className="container-Item" onClick={() => setSelectedDay(dayNumber)}>
            <h1 className="render-day">
                {renderDay(dayNumber)}
            </h1>
            <h1 className="temperatura-max">
                Max: {tempMax}°C
            </h1>
            <h1 className="temperatura-min">
                Min: {tempMin}°C
            </h1>
            <div className="render-weather">
                {renderWeather(typeWeather)}
            </div>

        </div>
    )
};

export default CardItem;


