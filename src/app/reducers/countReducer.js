import Immutable from 'immutable';
import {
    createReducer
} from './../../lib/composer';
import * as reducers from './COUNT';

let initialState;

initialState = Immutable.Map({
    sum: 0
});

export default createReducer(reducers, initialState);
