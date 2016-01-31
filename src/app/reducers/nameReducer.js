import Immutable from 'immutable';
import {
    createReducer
} from 'redux-create-reducer';
import * as reducers from './NAME';

let initialState;

initialState = Immutable.Map({
    currentName: 'Foo'
});

export default createReducer(initialState, reducers);
