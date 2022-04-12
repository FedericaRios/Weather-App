import React from 'react';
import styles from './styles.css';
import CardItem from '../cardItem/CardItem';

const Footer = (props) => {
    const temperatureMax = props.infoWeather.main?.temp_max;
    const temperatureMin = props.infoWeather.main?.temp_min;
    return (
        <div className='footer-container'>
            <div className="container-card-item">
                <CardItem temperatureMax={temperatureMax} temperatureMin={temperatureMin} />
                <CardItem temperatureMax={temperatureMax} temperatureMin={temperatureMin} />
                <CardItem temperatureMax={temperatureMax} temperatureMin={temperatureMin} />
                <CardItem temperatureMax={temperatureMax} temperatureMin={temperatureMin} />
            </div>
        </div>
    )
}

export default Footer;
