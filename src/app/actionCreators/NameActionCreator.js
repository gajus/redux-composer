let NameActionCreator;

NameActionCreator = {};

NameActionCreator.change = (name) => {
    return {
        type: 'CHANGE_NAME',
        data: {
            name
        }
    };
};

export default NameActionCreator;
