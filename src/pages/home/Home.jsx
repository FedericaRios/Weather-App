import React, { useState } from 'react';
import style from './styles.css'
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';


const Home = () => {
    const [dailyWeatherInfo, setDailyWeatherInfo] = useState([]);
    const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});

    return (
        <div className='home-container'>
            <Header setDailyWeatherInfo={setDailyWeatherInfo} setCurrentWeatherInfo={setCurrentWeatherInfo} />
            <Body currentWeatherInfo={currentWeatherInfo} />
            <Footer dailyWeatherInfo={dailyWeatherInfo} />
        </div>
    )
}

export default Home;