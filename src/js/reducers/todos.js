import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function todos(state = InitialState.todos.todos, action) {
    let {payload, type} = action;
    switch(type) {
        case types.ADD_TODO:
            return {...state, data: [ payload, ...state.data ] };
        case types.DELETE_TODO:
            return { ...state, data: state.data.filter((item, i) => i !== payload) } 
        case types.TOGGLE_COMPLETE_TODO:
            return { ...state, data: state.data.map((item, i) => i === payload 
                ? {...item, complete: !item.complete}
                : item )} 
        default: {
            return state;
        }
    }
}
