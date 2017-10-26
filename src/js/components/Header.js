import React from 'react';

const Header = (props) => (
    <header className="header">
        <h1 className="page-title">React Lesson: 4 [ context, Children API ]</h1>
        <h3 className="description">
            Задания на сегодня:
        </h3>
        <ul className="tasks">
            <li>Создать компонент меню, с рабочими пунктами - "главная", "создать пост", инпут поиска  (3 балла)</li>
            <li>Написать `middleware` который будет обновлять данные в localStorage. (данные == посты) (3 балла)</li>
            <li>
                Создать компонент меню, с рабочими пунктами - "создать пост", инпут поиска (3 балла) и главная на
                которой должны отображатся все посты. ({`<Link/>`})
            </li>
            <li>
                Создать компонент Notify который будет отвечать за оповещение
                о том что ваш пост был успешно создан. Компонент должен быть `position: fixed` и удалятся из DOM через время.
            </li>
            <li>Сделать слайдер с использованием Children API</li>
            <li>Дополнительно: Использовать модуль react-transition-group для более плавной анимации слайдера.</li>
        </ul>
    </header>
);

export default Header;