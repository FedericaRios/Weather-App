import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';


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