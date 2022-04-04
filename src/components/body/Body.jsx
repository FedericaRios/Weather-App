import React from 'react';
import styles from './styles.css'

const Body = (props) => {
    const cityName = props.infoWeather.name;
    const weather = props.infoWeather.weather && props.infoWeather.weather[0].description;
    const temperatureMax = props.infoWeather.main?.temp_max;
    const temperatureMin = props.infoWeather.main?.temp_min;
    const temperatureCurrent = props.infoWeather.main?.temp;

    return (
        <div className='body-container'>
            <div className='body-card-main'>
                <div className="body-section-img">
                </div>
                <div className="body-section-info-clima">
                    <h1>{cityName}</h1>
                    <h1>{weather}</h1>
                    <h1>{temperatureMax}</h1>
                    <h1>{temperatureMin}</h1>
                    <h1>{temperatureCurrent}</h1>
                </div>
            </div>
            <div className="body-containers"></div>
        </div>
    )
}

export default Body;