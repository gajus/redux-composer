import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import store from './store';
import {
    CalculatorContainer
} from './containers';

ReactDOM.render(<Provider store={store}>
    <CalculatorContainer />
</Provider>, document.querySelector('#app'));

