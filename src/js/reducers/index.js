import { combineReducers } from 'redux';

import posts from './posts';
import tests from './tests';

const rootReducer = combineReducers({
    posts,
    tests
});

export default rootReducer;
