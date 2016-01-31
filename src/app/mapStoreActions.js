import {
    bindActionCreators
} from 'redux';
import store from './store';
import {
    CountActionCreator,
    NameActionCreator
} from './actionCreators';

let storeActions;

storeActions = {
    CountActionCreator: bindActionCreators(CountActionCreator, store.dispatch),
    NameActionCreator: bindActionCreators(NameActionCreator, store.dispatch)
};

export default () => {
    return storeActions;
};
