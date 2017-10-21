import React from 'react';

const Header = (props) => (
    <header className="header">
        <h3>Задания на сегодня:</h3>
        <ul className="tasks">
            <li>Добавить возможность редактировать пост (3 балла)</li>
            <li>
                Исправить работу функции contentView написаной внутри компонента "Post" так,
                чтобы развернутым был только один компонент. (4 балла)
            </li>
            <li>
                Дополнительно: Добавить возможность сортировать посты  (3 балла)
            </li>
        </ul>

 
    </header>
);

export default Header;
