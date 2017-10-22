import React from 'react';

const Header = (props) => (
    <header className="header">
        <h1 className="page-title">React Lesson: 5</h1>
        <h3 className="description">
            Задания на сегодня:
        </h3>
        <ul className="tasks">
            <li>
                На сегодня вашим заданием будет доделать все задания которые вы не успели реализовать, 
                или же просто разобратья в чем-то что вы не поняли.    
            </li>
        </ul>
    </header>
);

export default Header;