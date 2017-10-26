import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function users(state = InitialState.users, action) {
    let {type, payload } = action; 
    switch(type) {
        case types.ADD_USER:
            return state;
        default: 
            return state;
    }
}