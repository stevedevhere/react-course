import React from 'react';

const Header = (props) => (
    <header>
        <h3>Урок второй</h3>
        <p className="description">
            Что вы должны осознать сегодня: сomponents, JSX, props <br/>
            <b>Задания на сегодня:</b>
        </p>
        <ul className="tasks">
            <li>Добавить возможность обновления поста</li>
            <li>Перенести удаление постов на redux</li>
            <li>Добавить возможность сортировать посты по новизне</li>
            <li>Исправить работу функции contentView написаной внутри компонента "Post" так, чтобы развернутым был только один компонент. *</li>
        </ul>
        <p>Дополнительно: Прочитать про react-router, отображать по адресу "/post-{id}" информацию определенного поста.</p>
    </header>
);

export default Header;
