import React from 'react';
import './styles.css';

const CardItem = (props) => {

    return (
        <div className="container-Item">
            <h1 className="temperatura-max">
                {props.temperatureMax}°C
            </h1>
            <h1 className="temperatura-min">
                {props.temperatureMin}°C
            </h1>
        </div>
    )
};

export default CardItem;
