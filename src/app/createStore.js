import {
    createStore,
    applyMiddleware
} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from './rootReducer';

let defaultInitialState;

defaultInitialState = Immutable.Map();

export default (initialState = defaultInitialState) => {
    let logger,
        store;

    logger = createLogger({
        collapsed: true,
        stateTransformer: (state) => {
            return state.toJS();
        }
    });

    store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

    return store;
};
