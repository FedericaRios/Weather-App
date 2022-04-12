import React, { useState, useEffect } from 'react';
import style from './styles.css';

// const API = "https://api.openweathermap.org/data/2.5/weather";
const API_lat_long = "http://api.openweathermap.org/geo/1.0/direct";
const API_weather = "https://api.openweathermap.org/data/2.5/onecall";
const KEY_API = "f3a6b4f1ad9818628925224b11a71e2e";


function Header(props) {

    const [city, setCity] = useState('');

    const handleInputValue = (input) => {
        const valoresObtenidos = input.target.value;
        setCity(valoresObtenidos);
    }

    const callAPI = async () => {
        let latitud_longitud = await fetch(`${API_lat_long}?q=${city}&limit=1&appid=${KEY_API}`);
        latitud_longitud = await latitud_longitud.json()
        const latitud = latitud_longitud[0].lat;
        const longitud = latitud_longitud[0].lon;
        let dataWeather = await fetch(`${API_weather}?lat=${latitud}&lon=${longitud}&exclude=minutely,hourly,alerts&appid=${KEY_API}&units=metric`)
        dataWeather = await dataWeather.json()
        props.setInfoWeather(dataWeather)
        console.log(latitud_longitud)
        console.log(dataWeather)
    }

    return (
        <header className='header-nav'>
            <input onChange={handleInputValue}
                placeholder='Enter your city...'
                className='header-buscador'
            />
            <button className="header-button" onClick={callAPI}>Search</button>
        </header>
    )
}

export default Header;