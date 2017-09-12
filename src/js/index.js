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
