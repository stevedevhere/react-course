import React from 'react';
import ReactDOM from 'react-dom';

// Provider - это обертка которая позволяет всем компонентам коннектится к store и получать все необходимые
// для работы с redux функции. Уровень вложености обязателно должен быть таким как в примере - самый корневой
// компонент - Provider, потом наш контейнер, а в нем уже все что нам  нужно.
import {Provider} from 'react-redux';

// собранный store redux, он здесь нужен чтобы передать его в Provider
import store from './store';

import '../sass/common.scss';
import MainLayout from "./containers/MainLayout";


ReactDOM.render(
    <Provider store={store}>
        <MainLayout />
    </Provider>
    , document.getElementById('app'));
