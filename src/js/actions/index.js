import * as types from '../constants/ActionTypes';

// Action для добавляения поста.


export const addPost = (payload) => ({type: types.ADD_POST, payload});