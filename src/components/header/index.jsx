import React, { useEffect, useState } from 'react';
import './styles.css';
import Loader from '../loader';
const API_lat_long = "https://api.openweathermap.org/geo/1.0/direct";
const API_weather = "https://api.openweathermap.org/data/2.5/onecall";
const KEY_API = "f3a6b4f1ad9818628925224b11a71e2e";

function Header(props) {
    const [city, setCity] = useState('');
    const [isLoading, setIsloading] = useState(false);

    // useEffect(() => {
    //     if (!latitud_longitud.length > 0) {
    //         props.setErrorFindingCity(true);
    //     }
    // }, [])

    const handleInputValue = (input) => {
        const valoresObtenidos = input.target.value;
        setCity(valoresObtenidos);
    };

    const callAPI = async () => {
        setIsloading(true);
        props.setErrorFindingCity(false);
        let latitud_longitud = await fetch(`${API_lat_long}?q=${city}&limit=1&appid=${KEY_API}`);
        latitud_longitud = await latitud_longitud.json();

        if (latitud_longitud.length > 0) {
            const latitud = latitud_longitud[0].lat;
            const longitud = latitud_longitud[0].lon;
            let dataWeather = await fetch(`${API_weather}?lat=${latitud}&lon=${longitud}&exclude=minutely,hourly,alerts&appid=${KEY_API}&units=metric`);
            dataWeather = await dataWeather.json();
            const dayCurrent = dataWeather.current;
            const nameCity = latitud_longitud[0].name;;
            const week = dataWeather.daily;
            props.setDailyWeatherInfo(week);
            props.setCurrentWeatherInfo({ ...dayCurrent, name: nameCity });
        } else {
            props.setErrorFindingCity(true);
            props.setCurrentWeatherInfo({ name: 'error' });
        }
        setIsloading(false);
    };

    return (
        <header className='nav-container'>
            <input
                type='search'
                onChange={handleInputValue}
                placeholder='Enter your city...'
                className='searcher'
            />
            <button className="button-search" onClick={callAPI}>Search</button>
            {isLoading && <Loader />}
        </header>
    )
};

export default Header;