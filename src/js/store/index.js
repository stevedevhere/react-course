// applyMiddleware - нужен для того чтобы собирать совокупность middleware's в один и
// передавать уже в подходящем для store виде
// createStore - нужен чтобы создать store.
import { createStore, applyMiddleware } from 'redux';

// createLogger это готовый логер для redux
import {createLogger} from 'redux-logger';

// Получаем все собранные в один большой редьюсеры, которые мы должены передать в store при создании
// чтобы store знала что ей делать после полученного с помощью функции dispatch события.
import reducers from '../reducers';


// Middleware это прослойка между вызовом события и его
// обработкой, middleware есть готовые и есть возможность
// написать свой.
const middleware = applyMiddleware(createLogger());


// Используя функцию createStore описаную в библиотеке
// redux мы можем создать store.


// Здесь мы конфигурируем глобальный store:
//  - reducers это все reducers собраные в один большой reducer с помощью функции
//    combineReducers, это нужно для коректной работы store. (каждый reducer отвечает за какую-то частичку данных в store)
//  - middleware это дополнительный функционал который сработает перед тем как action дойдет до reducer'a
//    это своего рода прослойка между функцией dispatch и reducer'ом
const store = createStore(reducers, middleware);

export default store;



