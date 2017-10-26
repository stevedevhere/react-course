import reducers from '../reducers'; 
import {applyMiddleware, createStore} from 'redux';

import middleware from './middleware';

const store = createStore(reducers, applyMiddleware(middleware));
export default store;
