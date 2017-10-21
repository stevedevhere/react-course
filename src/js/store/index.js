// applyMiddleware - нужен для того чтобы собирать совокупность middleware's в один и
// передавать уже в подходящем для store виде
// createStore - нужен чтобы создать store.
import { createStore, applyMiddleware } from 'redux';

// createLogger это готовый логер для redux, в продакшене его будет неправильным и нет в этом нужды.
// import {createLogger} from 'redux-logger';

// Получаем все собранные в один большой редьюсеры, которые мы должены передать в store при создании
// чтобы store знала что ей делать после полученного с помощью функции dispatch события.
import reducers from '../reducers';

import {ADD_POST, DELETE_POST, UPDATE_EDITED_POST} from '../constants/ActionTypes';

// custom middleware for posts actions ( updateLocalStorage & modify post when create )
const postsMiddleware = store => next => action => {
    if(action.type === ADD_POST) {
        action = {...action, payload: {...action.payload, contentToggle: false}}    
        next(action);
        localStorage.setItem('posts', JSON.stringify(store.getState().posts));
        return;        
    } else if(action.type === DELETE_POST || action.type === UPDATE_EDITED_POST) {
        next(action);
        localStorage.setItem('posts', JSON.stringify(store.getState().posts));
        return;
    }
    next(action);
}

// const yourCustomMiddlewareExample = store => next => action {
//     // code here...
// }

// Middleware это прослойка между вызовом события и его
// обработкой, middleware есть готовые и есть возможность
// написать свой.
const middleware = applyMiddleware(postsMiddleware);


// Используя функцию createStore описаную в библиотеке
// redux мы можем создать store.

// Здесь мы конфигурируем глобальный store:
//  - reducers это все reducers собраные в один большой reducer с помощью функции
//    combineReducers, это нужно для коректной работы store. (каждый reducer отвечает за какую-то частичку данных в store)
//  - middleware это дополнительный функционал который сработает перед тем как action дойдет до reducer'a
//    это своего рода прослойка между функцией dispatch и reducer'ом
const store = createStore(reducers, middleware);

export default store;



