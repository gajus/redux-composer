import Immutable from 'immutable';
import {
    createReducer
} from 'redux-create-reducer';
import * as reducers from './COUNT';

let initialState;

initialState = Immutable.Map({
    sum: 0
});

export default createReducer(initialState, reducers);
