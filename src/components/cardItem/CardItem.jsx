import React from 'react';
import './styles.css';
import solcito from '../../assets/soleado.jpg';
import cielito from '../../assets/cielito.jpg';
import lluvia from '../../assets/lluvia.jpg';
import nublado from '../../assets/nublado.jpg';
import parcialsoleado from '../../assets/parcialmenteSoleado.jpg';

const CardItem = ({
    weather,
    tempMax,
    tempMin,
    dayName
}) => {
    const dayNumber = new Date(dayName * 1000).getDay();

    const renderDay = () => {
        switch (dayNumber) {
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            case 7:
                return 'Sunday';
        }
    }
    console.log(tempMax)
    return (
        <div className="container-Item">
            <h1 className="render-day">
                {renderDay()}
            </h1>
            {<h1 className="temperatura-min">
                {tempMin}°C
            </h1>}
            {<h1 className="temperatura-max">
                {tempMax}°C
            </h1>}
            {/* {<h1 className="temperatura-min">
                {weather}
            </h1>} */}
        </div>
    )
};

export default CardItem;


