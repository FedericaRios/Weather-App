import React, { useState } from 'react';
import style from './styles.css'
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';

const Home = () => {

    return (
        <div className='home-container'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Home;