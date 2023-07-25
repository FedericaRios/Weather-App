import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';


const Home = () => {
    const [dailyWeatherInfo, setDailyWeatherInfo] = useState([]);
    const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});
    const [selectedDay, setSelectedDay] = useState();

    return (
        <div className='home-container'>
            <Header setDailyWeatherInfo={setDailyWeatherInfo} setCurrentWeatherInfo={setCurrentWeatherInfo} />
            <Body currentWeatherInfo={currentWeatherInfo} dailyWeatherInfo={dailyWeatherInfo} selectedDay={selectedDay} />
            <Footer dailyWeatherInfo={dailyWeatherInfo} setSelectedDay={setSelectedDay} />
        </div>
    )
};

export default Home;