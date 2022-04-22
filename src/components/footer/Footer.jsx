import React from 'react';
import styles from './styles.css';
import CardItem from '../cardItem/CardItem';

const Footer = (props) => {
    const sevenDaysArray = props.dailyWeatherInfo.filter((day, index) => index !== 7)
    return (
        <div className='footer-container'>
            <div className="container-card-item">
                {
                    sevenDaysArray && sevenDaysArray.map(day => {
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
