import {
    INCREMENT,
    DECREMENT
} from './../reducers/COUNT';

let countActionCreator;

countActionCreator = {};

countActionCreator.increment = () => {
    return {
        type: INCREMENT
    };
};

countActionCreator.decrement = (data) => {
    return {
        type: DECREMENT
    };
};

export default countActionCreator;
