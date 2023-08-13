import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';

const Home = () => {
    const [dailyWeatherInfo, setDailyWeatherInfo] = useState([]);
    const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});
    const [selectedDay, setSelectedDay] = useState();
    const [errorFindingCity, setErrorFindingCity] = useState(false);

    return (
        <div className='home-container'>
            <Header
                setDailyWeatherInfo={setDailyWeatherInfo}
                setCurrentWeatherInfo={setCurrentWeatherInfo}
                setErrorFindingCity={setErrorFindingCity}
            />
            <Body
                currentWeatherInfo={currentWeatherInfo}
                dailyWeatherInfo={dailyWeatherInfo}
                selectedDay={selectedDay}
                errorFindingCity={errorFindingCity}
            />
            <Footer
                dailyWeatherInfo={dailyWeatherInfo}
                setSelectedDay={setSelectedDay}
                errorFindingCity={errorFindingCity}
            />
        </div>
    )
};

export default Home;