import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import '../sass/common.scss';
import MainLayout from "./containers/MainLayout";

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));


 /**
 *
 * разница скорости загрузки страницы при использовании виртуального дом и обычного.
 * пример. если спросят в чем прикол реакта - в том что у него есть свой стандарт
  * который легко модифицировать потому что для всех один. а так же в  реакте есть
  * возможность удобно отлсежитьвать изменения засчет компонентного подхода и жиз	ненного цикла, но об этом позже
  *
 *
 */
