import clearSky from '../assets/clear-sky.png';
import Sunny from '../assets/sunny.png';
import Cloudy from '../assets/cloudy.png';
import Rain from '../assets/rain.png';
import Snow from '../assets/snow.png';

export const renderDay = (dayNumber) => {
    const weekDays = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    };

    const day = weekDays[dayNumber] || '';

    return day;
};

export const renderWeather = (typeWeather) => {
    const weatherIcons = {
        'Clouds Clear': <img src={clearSky} alt="Clouds Clear" style={{ width: "40%", height: "40%" }} />,
        'Clouds': <img src={Cloudy} alt="Clouds" style={{ width: "40%", height: "40%" }} />,
        'Clear': <img src={Sunny} alt="Clear" style={{ width: "40%", height: "40%" }} />,
        'Rain': <img src={Rain} alt="Rain" style={{ width: "40%", height: "40%" }} />,
        'Snow': <img src={Snow} alt="Snow" style={{ width: "40%", height: "40%" }} />,
    };

    const weatherIcon = weatherIcons[typeWeather] || <img src={clearSky} alt="Clouds Clear" style={{ width: "40%", height: "40%" }} />;

    return weatherIcon;
};