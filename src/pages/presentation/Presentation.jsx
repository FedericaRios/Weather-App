import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css';

const Presentation = () => {
    let navigate = useNavigate()
    const redireccionHome = () => {
        navigate("/home");
    }

    return (
        <div className="presentation">
            <h1>Consulta el pronóstico</h1>
            <div className="presentation-button">
                <button onClick={redireccionHome}>Consultar</button>
            </div>
        </div>

    )
};

export default Presentation;