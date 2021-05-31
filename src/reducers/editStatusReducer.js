const editStatusInitialState = false;
const editStatusReducer = (state = editStatusInitialState, action) => {
    switch (action.type) {
        case "editStatus":
            return !state;
        default:
            return state
    }
}
export default editStatusReducer;