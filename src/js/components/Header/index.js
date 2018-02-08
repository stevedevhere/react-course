import React from 'react';
import Navigation from '../Navigation';
import Slider from '../Slider';
import s from './styles';

const Header = () => (
  <header className={s.header()}>
    <h1 className={s.title()}>Simple react blog</h1>
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
