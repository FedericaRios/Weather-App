import React, { useState, useEffect } from 'react';
import style from './styles.css';

const API = "https://api.openweathermap.org/data/2.5/weather";
const KEY_API = "f3a6b4f1ad9818628925224b11a71e2e";

function Header() {

    const [city, setCity] = useState('');
    const [infoWeather, setInfoWeather] = useState({});

    const handleInputValue = (input) => {
        const valoresObtenidos = input.target.value;
        setCity(valoresObtenidos);
    }

    const callAPI = async () => {
        fetch(`${API}?q=${city}&appid=${KEY_API}&units=metric`)
            .then(data => setInfoWeather(data.json()));
    }

    useEffect(() => {
        console.log(infoWeather);
    }, [infoWeather]);

    return (
        <header className='header-nav'>
            <input onChange={handleInputValue}
                placeholder='Enter your city...'
                className='header-buscador'
            />
            <button className="header-button" onClick={async () => await callAPI()}>Search</button>
            <h1>name city</h1>
            <h1>grados</h1>
        </header>
    )
}

export default Header;