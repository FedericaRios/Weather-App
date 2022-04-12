import React, { useState } from 'react';
import style from './styles.css'
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';


const Home = () => {
    const [infoWeather, setInfoWeather] = useState({});

    return (
        <div className='home-container'>
            <Header setInfoWeather={setInfoWeather} />
            <Body infoWeather={infoWeather} />
            <Footer infoWeather={infoWeather} />
        </div>
    )
}

export default Home;