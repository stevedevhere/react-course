import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import s from './styles';

// Navigation
export default () => (
  <nav className={s.navigationContainer()}>
    <ul>
      <li className={s.navItem()}><Link className={s.navLink()} to="/">Home</Link></li>
      <li className={s.navItem()}><Link className={s.navLink()} to="/add-post">Add post</Link></li>
      <li className={s.navItem()}><Link className={s.navLink()} to="/about">About</Link></li>
      <li className={s.navItem()} style={{ float: 'right' }}><Search /></li>
    </ul>
  </nav>
);
