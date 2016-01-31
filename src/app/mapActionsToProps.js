import _ from 'lodash';
import {
    bindActionCreators
} from 'redux';
import store from './store';
import * as actionCreators from './actionCreators';

let actions;

actions = _.mapValues(actionCreators, (actionCreator) => {
    return bindActionCreators(actionCreator, store.dispatch);
});

export default () => {
    return actions;
};
