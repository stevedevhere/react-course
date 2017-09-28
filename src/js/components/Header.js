import React from 'react';

const Header = (props) => (
    <header>
        <h3>Урок второй</h3>
        <p className="description">
            Что вы должны осознать сегодня:  props & state, ReactDOM, lifecycle <br/>
            <b>Задания на сегодня:</b>
        </p>
        <ul className="tasks">
            <li>Добавить возможность редактировать пост (3 балла)</li>
            <li>Добавить возможность сортировать посты  (3 балла)</li>
            <li>
                Исправить работу функции contentView написаной внутри компонента "Post" так,
                чтобы развернутым был только один компонент. (4 балла)
            </li>
        </ul>

        <p>
            Дополнительно: Прочитать про react-router, после чего, по адресу "/post-{`{id}`}" этого приложения отображать
            компонент поста с id указаным в адресной строке. *
        </p>
    </header>
);

export default Header;
