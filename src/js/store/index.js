import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';


// Здесь мы конфигурируем глобальный store:
//  - rootReducer это все reducers собраные в один большой reducer с помощью функции
//    combineReducers, это нужно для коректной работы store. (каждый reducer отвечает за какую-то частичку данных в store)
//  - middleware это дополнительный функционал который сработает перед тем как action дойдет до reducer'a
//    это своего рода прослойка между функцией dispatch и reducer'ом
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;