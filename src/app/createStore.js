import _ from 'lodash';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from './reducers';
import {
    getReducerName
} from './../lib/composer';

let defaultInitialState;

defaultInitialState = Immutable.Map();

export default (initialState = defaultInitialState) => {
    let logger,
        store;

    logger = createLogger({
        collapsed: true,
        actionTransformer: (action) => {
            let reducerName;

            reducerName = getReducerName(action.type);

            if (reducerName) {
                action = {
                    ...action,
                    type: reducerName
                };
            }

            return action;
        },
        stateTransformer: (state) => {
            return state.toJS();
        }
    });

    store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

    return store;
};
