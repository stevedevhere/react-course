import * as types from '../constants/ActionTypes';

export const addTodo = (payload) => ({type: types.ADD_TODO, payload})
export const del = (payload) => ({ type: types.DELETE_TODO, payload })
export const complete = (payload) => ({ type: types.TOGGLE_COMPLETE_TODO, payload })
export const update = (payload) => ({ type: types.UPDATE_TODO, payload })
