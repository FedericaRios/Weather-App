import React, { useEffect, useState } from 'react';
import './styles.css';
import { renderDay, renderWeather } from '../../functions';

const Body = (props) => {
    const [selectedDayData, setSelectedDayData] = useState();
    console.log(selectedDayData, "selectedDayData");
    const selectedDay = props.selectedDay;
    const cityName = props.currentWeatherInfo.name;
    const currentTemp = props.currentWeatherInfo.temp;
    const currentWeather = props.currentWeatherInfo?.weather && props.currentWeatherInfo?.weather[0]?.description;
    const typeWeather = props.currentWeatherInfo?.weather && props.currentWeatherInfo?.weather[0]?.main;
    const humidity = props.currentWeatherInfo.humidity;
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const today = new Date().getDay();
    console.log(today);
    const currentDay = days[today];
    const dayFound = days.find((day, index) => index === selectedDay);

    useEffect(() => {
        if (selectedDay) {
            const returnDataOfSelectedDay = () => {
                const timestampOfDay = props.dailyWeatherInfo[selectedDay]?.dt;
                const hourlyDataOfDay = props.dailyWeatherInfo.filter(
                    (hourlyData) =>
                        hourlyData.dt >= timestampOfDay && hourlyData.dt < timestampOfDay + 86400
                );
                if (hourlyDataOfDay.length) {
                    setSelectedDayData(hourlyDataOfDay[0]);
                }
            };
            returnDataOfSelectedDay();
        }
    }, [selectedDay]);

    return (
        <div className='body-container'>
            {cityName && (
                <div className='body-card-main'>
                    {(selectedDayData && dayFound !== currentDay) ? (
                        <>
                            <div className="img-weather">
                                {renderWeather(typeWeather)}
                            </div>
                            <div className="weather-container">
                                <div className="info-container">
                                    <div className="data-container">
                                        <span>Weather <strong>{selectedDayData.weather[0].description}</strong></span>
                                        <span>Humidity  <strong>{selectedDayData.humidity}%</strong></span>
                                    </div>
                                    <div className="data-container">
                                        <strong>{renderDay(selectedDay)}</strong>
                                        <span>{cityName}</span>
                                    </div>
                                </div>
                                <div className="temp-container">
                                    <span>Morning <strong>{selectedDayData.feels_like.morn}°C</strong></span>
                                    <span>Day <strong>{selectedDayData.feels_like.day}°C</strong></span>
                                    <span>Evening <strong>{selectedDayData.feels_like.eve}°C</strong></span>
                                    <span>Night <strong>{selectedDayData.feels_like.night}°C</strong></span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="img-weather">
                                {renderWeather(typeWeather)}
                            </div>
                            <div className="weather-container">
                                <div className="info-container">
                                    <div className="data-container">
                                        <span>Weather <strong>{currentWeather}</strong></span>
                                        <span>Humidity <strong>{humidity}%</strong></span>
                                    </div>
                                    <div className="data-container">
                                        <strong>Today</strong>
                                        <span>{cityName}</span>
                                    </div>
                                </div>
                                <div className="temp-container">
                                    <span style={{ fontSize: '18px' }}>Temperature current</span>
                                    <strong style={{ fontSize: '30px' }}>{currentTemp}°C</strong>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    )
};

export default Body;