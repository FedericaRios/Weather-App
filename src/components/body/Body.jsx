import React from 'react';
import styles from './styles.css'
import { WiDayCloudy, WiCloudy, WiDaySunny, WiRain, WiSnow, } from "react-icons/wi";

const Body = (props) => {
    const cityName = props.currentWeatherInfo.name;
    const currentTemp = props.currentWeatherInfo.temp;
    const currentWeather = props.currentWeatherInfo.weather && props.currentWeatherInfo.weather[0].description;

    const typeWeather = props.currentWeatherInfo.weather[0].main;

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
        }
    }

    return (
        <div className='body-container'>
            <div className='body-card-main'>
                <div className="body-section-img">
                    {renderWeather()}
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