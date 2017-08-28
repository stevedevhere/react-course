import * as types from '../constants/ActionsTypes';
import initialState from '../constants/InitialState';

export default function posts(state = initialState.posts, action) {
    let {type, payload} = action;
    switch (type) {
      case types.ADD_POST:
          return [...state, payload];
      default:
            return state;
    }
};
