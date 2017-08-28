import * as types from '../constants/ActionsTypes';
import initialState from '../constants/InitialState';

export default function tests(state = initialState.tests, action) {
    const {type, payload} = action;
    switch (type) {
        case types.TEST:
            return [...state, payload];
        default:
            return state;
    }
}