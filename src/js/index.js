import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';

import {createStore, combineReducers} from 'redux';

const FAKE_DATA = [
    {title: 'Learn React.js', descr: '1 descr for this.', completed: false},
    {title: 'Learn Router', descr: '2 descr for this.', completed: false},
    {title: 'Learn Redux', descr: '3 descr for this.', completed: false},
    {title: 'Make a little shop', descr: '4 descr for this.', completed: false},
];

// const middleware = store => next => action => {
//     console.log(action);
//     next(action);
// }

function todos(state = { data: FAKE_DATA }, action) {
    let {payload, type} = action;
    switch(type) {
        case "ADD_TODO":
            return {...state, data: [ payload, ...state.data ] };
        case "DELETE_TODO":
            return { ...state, data: state.data.filter((item, i) => i !== payload) } 
        case "TOGGLE_COMPLETE_TODO":
            return { ...state, data: state.data.map((item, i) => i === payload 
                ? {...item, complete: !item.complete}
                : item )} 
        default: {
            return state;
        }
    }
}

const reducers = combineReducers({
    todos,
})

const store = createStore(reducers);

import '../sass/common.scss';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById("app"));