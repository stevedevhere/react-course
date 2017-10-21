import React from 'react';
import {render} from 'react-dom';

// BrowserRouter это основной компонент react-router'a который
// дает нашему приложению работать с url
import { BrowserRouter as Router } from 'react-router-dom';

import '../sass/common.scss';
import MainLayout from "./containers/MainLayout";

// Provider - это обертка которая позволяет всем компонентам коннектится к store и получать все необходимые
// для работы с redux функции. Уровень вложености обязателно должен быть таким как в примере - самый корневой
// компонент - Provider, а потом остальное, это может быть наш контейнер а может быть роутер и внутри него наш 
// главный компонент, а в нем уже все что нам  нужно.
import {Provider} from 'react-redux';

// Cобранный store redux, он здесь нужен чтобы передать его в Provider.
import store from './store';

// 
render(
    <Provider store={store}>
        <Router>
            <MainLayout />
        </Router>
    </Provider>
    , document.getElementById('app'));


