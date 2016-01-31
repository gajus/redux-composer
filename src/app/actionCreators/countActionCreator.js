let CountActionCreator;

CountActionCreator = {};

CountActionCreator.increment = () => {
    return {
        type: 'COUNT_INCREMENT'
    };
};

CountActionCreator.decrement = () => {
    return {
        type: 'COUNT_DECREMENT'
    };
};

export default CountActionCreator;
