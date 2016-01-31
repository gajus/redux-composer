import _ from 'lodash';
import {
    combineReducers
} from 'redux-immutable';
import * as maybeReducers from './reducers';

let reducers,
    rootReducer;

reducers = maybeReducers;
reducers = _.pickBy(reducers, (reducer, name) => {
    return _.endsWith(name, 'Reducer');
});
reducers = _.mapKeys(reducers, (reducer, name) => {
    return name.slice(0, -7);
});

rootReducer = combineReducers(reducers);

export default rootReducer;
