import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';

import {createStore} from 'redux';

const FAKE_DATA = [
    {title: 'Learn React.js', descr: '1 descr for this.', completed: false},
    {title: 'Learn Router', descr: '2 descr for this.', completed: false},
    {title: 'Learn Redux', descr: '3 descr for this.', completed: false},
    {title: 'Make a little shop', descr: '4 descr for this.', completed: false},
];

function reducer(state = { data: FAKE_DATA }, action) {
    let { payload, type } = action;

    switch(type) {
        case "ADD_TODO": {
            return {...state, payload};
        }
        default: {
            return state;
        }
    }
}

const store = createStore(reducer);

console.log(store);

import '../sass/common.scss';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById("app"));

    