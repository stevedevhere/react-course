import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Navigation = props => (
    <nav className="navigation">        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-post">Add post</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="right"><Search/></li>
        </ul>
    </nav>
);

export default Navigation;