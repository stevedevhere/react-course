import * as types from '../constants/ActionsTypes';

export const addPost = data => ({type: types.ADD_POST, payload: data});
export const test = data => ({type: types.TEST, payload: "test"});