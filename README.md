## Setup

```sh
npm install babel-cli -g

cd ./client
npm install
NODE_ENV=development babel-node ./src/bin/serverExpress; say 'client crashed';
```

## Files

Whilst this is still just an experiment, the Composer is in [`./src/lib`](`./src/lib`). [`./src/app`](`./src/app`) implements Composer.

## Concept

Domain reducer [`./src/app/reducers/countReducer.js`](https://github.com/gajus/redux-composer/blob/a4fa3078b7f1918ee9ddf582f92e54f3c0bcff05/src/app/reducers/countReducer.js) uses `createReducer` function to create a function that iterates uses <Function> action.type` to find reducer in `reducers` object.

```js
import Immutable from 'immutable';
import {
    createReducer
} from './../../lib/composer';
import * as reducers from './COUNT';

let initialState;

initialState = Immutable.fromJS({
    sum: 0
});

export default createReducer(reducers, initialState);
```
