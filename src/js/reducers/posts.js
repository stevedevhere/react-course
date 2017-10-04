import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

/*
*
* Это reducer, он обрабатывает наши actions. Можно создать несколько редьюсеров для разных
* по смыслу событий.
*
* Reducer это функция (всегда), которая принимает на вход два параметра,
*
* первый - state, это или кусочек данных из всего приложения который мы можем с помощью
* этого редьюсера изменять.
*
* второй - action, это событие которое мы вызвали. Событием в redux служит объект, который по
* договоренности должен содержать в себе тип события, и определенные данные которые
* опять же по договоренности называются payload, этим payload может быть что угодно.
*
* Есть еще одно правило - функция reducer должна являться чистой функцией.
*
* Чистая функция — это функция, которая при одинаковых аргументах всегда
* возвращает одни и те же значения и не имеет видимых побочных эффектов.
*
*/

export default function posts(state = InitialState.posts, action) {
    let {type, payload} = action;

    switch(type) {
        case types.ADD_POST:
            return [...state, payload];
        case types.UPDATE_CONTENT_TOGGLER:
            return state.map((item, index) => {
                if(index === payload) return {...item, contentToggle: !item.contentToggle}
                else return {...item, contentToggle: false};
            });
        default:
            return state;
    }
};