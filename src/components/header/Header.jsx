import React, { useState, useEffect } from 'react';
import style from './styles.css';

const API = "https://api.openweathermap.org/data/2.5/weather";
const KEY_API = "f3a6b4f1ad9818628925224b11a71e2e";

function Header(props) {

    const [city, setCity] = useState('');

    const handleInputValue = (input) => {
        const valoresObtenidos = input.target.value;
        setCity(valoresObtenidos);
    }

    const callAPI = async () => {
        const response = await fetch(`${API}?q=${city}&appid=${KEY_API}&units=metric`)
        const dataWeather = await response.json()
        props.setInfoWeather(dataWeather);
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