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

// Store это общее связуемое звено. Когда мы вызываем событие которое должно
// обработаться, оно обращается к store, а точнее, вызывает один из его методов (dispatch)
const store = createStore(reducers, middleware);

export default store;