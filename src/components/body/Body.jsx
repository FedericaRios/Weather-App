import React, { useEffect, useState } from 'react';
import './styles.css';
import clearSky from '../../assets/clear-sky.png';
import Sunny from '../../assets/sunny.png';
import Cloudy from '../../assets/cloudy.png';
import Rain from '../../assets/rain.png';
import Snow from '../../assets/snow.png';

const Body = (props) => {
    const [selectedDayData, setSelectedDayData] = useState();
    const selectedDay = props.selectedDay;
    const cityName = props.currentWeatherInfo.name;
    const currentTemp = props.currentWeatherInfo.temp;
    const currentWeather = props.currentWeatherInfo?.weather && props.currentWeatherInfo?.weather[0]?.description;
    const typeWeather = props.currentWeatherInfo?.weather && props.currentWeatherInfo?.weather[0]?.main;
    const humidity = props.currentWeatherInfo.humidity;

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

    const renderWeather = (typeWeather) => {
        const weatherIcons = {
            'Clouds Clear': <img src={clearSky} alt="Clouds Clear" style={{ width: "50%", height: "50%" }} />,
            'Clouds': <img src={Cloudy} alt="Clouds" style={{ width: "40%", height: "40%" }} />,
            'Clear': <img src={Sunny} alt="Clear" style={{ width: "50%", height: "50%" }} />,
            'Rain': <img src={Rain} alt="Rain" style={{ width: "40%", height: "40%" }} />,
            'Snow': <img src={Snow} alt="Snow" style={{ width: "40%", height: "40%" }} />,
        };

        const weatherIcon = weatherIcons[typeWeather] || <img src={clearSky} alt="Clouds Clear" style={{ width: "50%", height: "50%" }} />;
        return weatherIcon;
    };

    const renderDay = (selectedDay) => {
        const weekDays = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
        };

        const day = weekDays[selectedDay] || '';
        return day;
    };

    return (
        <div className='body-container'>
            {cityName && (
                <div className='body-card-main'>
                    {selectedDayData ? (
                        <>
                            <div className="img-weather">
                                {renderWeather(typeWeather)}
                            </div>
                            <div className="weather-container">
                                <div className="info-container">
                                    <span>Morning <strong>{selectedDayData.feels_like.morn}°C</strong></span>
                                    <span>Day <strong>{selectedDayData.feels_like.day}°C</strong></span>
                                    <span>Evening <strong>{selectedDayData.feels_like.eve}°C</strong></span>
                                    <span style={{ marginBottom: '25px' }}>Night <strong>{selectedDayData.feels_like.night}°C</strong></span>
                                    <span>{selectedDayData.weather[0].description}</span>
                                    <span>Humidity {selectedDayData.humidity}%</span>
                                </div>
                                <div className="description-container">
                                    <span>{cityName}</span>
                                    <strong>{renderDay(selectedDay)}</strong>
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
                                    <span>{currentWeather}</span>
                                    <span>Temperature current {currentTemp}°C</span>
                                    <span>Humidity {humidity}%</span>
                                </div>
                                <div className="description-container">
                                    <strong>Today</strong>
                                    <span>{cityName}</span>
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