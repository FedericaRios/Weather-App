import React from 'react';
import './styles.css';
import CardItem from '../cardItem';

const Footer = (props) => {
    const sevenDaysArray = props.dailyWeatherInfo.filter((day, index) => index !== 7);

    return (
        <div className='footer-container'>
            {
                props.errorFindingCity === false &&
                <div className="container-card-item">
                    {
                        sevenDaysArray && sevenDaysArray.map(day => {
                            return (
                                <CardItem
                                    weather={day.weather}
                                    tempMax={day.temp.max}
                                    tempMin={day.temp.min}
                                    dayName={day.dt}
                                    setSelectedDay={props.setSelectedDay}
                                />)
                        })
                    }
                </div>
            }
        </div>
    )
};

export default Footer;
