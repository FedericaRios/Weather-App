import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Presentation = () => {
    const navigate = useNavigate();

    const redireccionHome = () => {
        navigate('/home');
    };

    return (
        <div className="presentation">
            <h2 className="introduction-title">¡Conoce el pronóstico!</h2>
            <button className="button" onClick={redireccionHome}>
                Consultar
            </button>
        </div>
    );
};

export default Presentation;