import Immutable from 'immutable';
import {
    createReducer
} from 'redux-create-reducer';
import * as reducers from './NAME';

let initialState;

initialState = Immutable.Map({
    currentName: 'Eoo'
});

export default createReducer(initialState, reducers);
