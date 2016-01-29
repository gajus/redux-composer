import {
    combineReducers
} from 'redux-immutable';

import countReducer from './countReducer';

let rootReducer;

rootReducer = combineReducers({
    count: countReducer
});

export default rootReducer;
