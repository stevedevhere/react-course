import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

/*
* Reducer for posts.
* Этот
*
* */

export default function posts(state = InitialState.posts, action) {
    let {type, payload} = action;
    switch(type) {
        case types.ADD_POST:
            return [...state, payload];
        default:
            return state;
    }
};