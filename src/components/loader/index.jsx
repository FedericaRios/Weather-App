import React from 'react';
import { ClipLoader } from 'react-spinners';
import './styles.css';

const Loader = () => {
    return (
        <div className='loader-container'>
            <ClipLoader
                size={100}
                color={'rgb(65, 224, 145)'}
            />
        </div>
    );
};

export default Loader;