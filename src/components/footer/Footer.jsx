import React from 'react';
import styles from './styles.css';
import CardItem from '../cardItem/CardItem';

const Footer = (props) => {

    return (
        <div className='footer-container'>
            <div className="container-card-item">
                {
                    props.dailyWeatherInfo.length && props.dailyWeatherInfo.map(day => {
                        console.log(day)
                        return (
                            <CardItem
                                weather={day.weather}
                                tempMax={day.temp.max}
                                tempMin={day.temp.min}
                                dayName={day.dt}
                            />)
                    })
                }

            </div>
        </div>
    )
}

export default Footer;
