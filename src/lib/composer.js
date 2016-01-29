import _ from 'lodash';

let createReducer,
    getReducerName,
    globalReducerList;

globalReducerList = {};

createReducer = (reducers, initialState) => {
    let reducerList;

    reducerList = _.values(reducers);

    _.assign(globalReducerList, reducers);

    return (state, action) => {
        if (state === undefined) {
            return initialState;
        }

        if (_.includes(reducerList, action.type)) {
            state = action.type(state, action);
        }

        return state;
    };
};

getReducerName = (reducer) => {
    let name;

    name = null;

    _.some(globalReducerList, (reducerFunction, reducerName) => {
        if (reducerFunction === reducer) {
            name = reducerName;

            return true;
        }
    })

    return name;
};

export {
    createReducer,
    getReducerName
};
