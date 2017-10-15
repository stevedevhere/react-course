import * as types from '../constants/ActionTypes';

export const addPost = (payload) => ({type: types.ADD_POST, payload});
export const deletePost = (payload) => ({type: types.DELETE_POST, payload});

export const updateContentToggler = (payload) => ({type: types.UPDATE_CONTENT_TOGGLER, payload});