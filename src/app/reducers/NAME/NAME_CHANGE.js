export default (state, action) => {
    return state.set('currentName', action.data.name);
};
