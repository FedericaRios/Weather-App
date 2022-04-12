import React from 'react';
import styles from './styles.css'

const Body = (props) => {
    const cityName = props.infoWeather.name;
    const weather = props.infoWeather.weather && props.infoWeather.weather[0].description;
    const temperatureCurrent = props.infoWeather.main?.temp;

    return (
        <div className='body-container'>
            <div className='body-card-main'>
                <div className="body-section-img">
                </div>
                <div className="body-section-info-clima">
                    <h1 className="day">Today</h1>
                    <h1 className="city-name">City: {cityName}</h1>
                    <h1 className="current">Temperature current: {temperatureCurrent}°C</h1>
                    <h1 className="weather">Weather: {weather}</h1>
                </div>
            </div>
            <div className="body-containers"></div>
        </div>
    )
}

export default Body;