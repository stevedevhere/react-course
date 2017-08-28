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

        <p>Дополнительно: Прочитать про react-router, по адресу "/post-{`{id}`}" отображать компонент поста с id указаным в адресной строке.</p>
    </header>
);

export default Header;
