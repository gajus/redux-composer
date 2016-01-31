import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import store from './store';
import {
    SandboxContainer
} from './containers';

ReactDOM.render(<Provider store={store}>
    <SandboxContainer />
</Provider>, document.querySelector('#app'));

