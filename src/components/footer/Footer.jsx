import React from 'react';
import styles from './styles.css';
import CardItem from '../cardItem/CardItem';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="container-card-item">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
    )
}

export default Footer;