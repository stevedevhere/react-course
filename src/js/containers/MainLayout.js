import React from 'react';
import Menu from '../components/Menu';

export default class MainLayout extends React.Component {
    
    render() {
        let bla = ['Home', 'About us', 'Contacts', 'Articles'];
        return (
            <div className="wrapper">
                <h1>[ Playground ]</h1>

                <p>Начало: сейчас мы сделаем самый простой компонент меню, который можно будет скрыть и отобразить.</p>
                <ul>
                    <Menu data={bla} />
                    
                    
                </ul>
            </div>
        );

    }
}
