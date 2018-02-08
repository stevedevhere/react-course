import React from 'react';
import Navigation from './Navigation';
import Slider from './Slider';

const Header = () => (
  <header className="header">
    <h1 className="page-title">Simple react blog</h1>
    <Slider>
      <p>React</p>
      <p>is easy</p>
      <p>to learn.</p>
      <p>Used Children API for this slider.</p>
    </Slider>
    <Navigation />
  </header>
);

export default Header;
