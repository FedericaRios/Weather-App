import React from 'react';
import styles from './styles.css'

const Body = (props) => {
    const cityName = props.currentWeatherInfo.name;
    const currentTemp = props.currentWeatherInfo.temp;
    const currentWeather = props.currentWeatherInfo.weather && props.currentWeatherInfo.weather[0].description;

    return (
        <div className='body-container'>
            <div className='body-card-main'>
                <div className="body-section-img">
                </div>
                <div className="body-section-info-clima">
                    <h1 className="day">Today</h1>
                    <h1 className="city-name">City: {cityName}</h1>
                    <h1 className="current">Temperature current: {currentTemp}°C</h1>
                    <h1 className="weather">Weather: {currentWeather}</h1>
                </div>
            </div>
            <div className="body-containers"></div>
        </div>
    )
}

export default Body;