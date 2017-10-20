import React from 'react';
import Navigation from './Navigation';
import Slider from './Slider';

const Header = (props) => (
    <header className="header">
        <h1 className="page-title">Simple react blog</h1>
        <Slider>
            <p>This is</p>
            <p>a slider</p>
            <p>using the Children API</p>
        </Slider>
        
        <Navigation/>
    </header>
);

export default Header;