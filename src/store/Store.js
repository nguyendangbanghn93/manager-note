import editStatusReducer from '../reducers/editStatusReducer';
import numReducer from '../reducers/numReducer';
import fBase from '../firebase/FirebaseConnect';
const redux = require('redux');

const noteInitialState = {
    test: "connect",
    isEdit: false,
    dataEdit: {},
    alertShow: false,
}
const note = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            fBase.data.push(action.data)
            return state
        case "EDIT_NOTE":
            return { ...state, dataEdit: action.data, status: action.status }
        default:
            case ""
            return state
    }
}


const allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer,
    note: note
})

const store = redux.createStore(allReducers);

store.subscribe(() => {
    console.log(123, JSON.stringify(store.getState()));
})
export default store;