let NameActionCreator;

NameActionCreator = {};

NameActionCreator.change = (name) => {
    return {
        type: 'NAME_CHANGE',
        data: {
            name
        }
    };
};

export default NameActionCreator;
