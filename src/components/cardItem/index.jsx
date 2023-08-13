import React from 'react';
import './styles.css';
import { renderDay, renderWeather } from '../../functions';

const CardItem = ({
    weather,
    tempMax,
    tempMin,
    dayName,
    setSelectedDay
}) => {
    const dayNumber = new Date(dayName * 1000).getDay();
    const typeWeather = weather[0].main;

    return (
        <div className="container-item" onClick={() => setSelectedDay(dayNumber)}>
            <h1 className="render-day">
                {renderDay(dayNumber)}
            </h1>
            <span className="temperatura-container">
                Max <strong>{tempMax}°C</strong>
            </span><br />
            <span className="temperatura-container">
                Min <strong>{tempMin}°C</strong>
            </span>
            <div>
                {renderWeather(typeWeather)}
            </div>

        </div>
    )
};

export default CardItem;


