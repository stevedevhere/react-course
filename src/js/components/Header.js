import React from 'react';

const Header = (props) => (
    <header className="header">
        <h1 className="page-title">React Lesson: 3 [ router, redux ]</h1>
        <h3>
            Задания на сегодня:
        </h3>
        <ul className="tasks">
            <li>Добавить возможность редактировать пост [redux] (2 балла)</li>
            <li>
                Исправить работу функции contentView написаной внутри компонента "Post" так,
                чтобы развернутым был только один компонент. [redux] (3 балла)
            </li>
            <li>
                Добавить компоненту AddPost возможность добавлять `links` (3 балла)
            </li>
            <li>
                Добавить стилизации на свое усмотрение, человек дизайн которого мне понравиться
                больше всего получит дополнительный балл.
            </li>
        </ul>
    </header>
);

export default Header;
