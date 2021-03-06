const numInitialState = ["Ga", "Cho", "Vit"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "addNew":
            return [...state, action.newItem]
        case "delete":
            return state.filter((key, value) => key !== action.deleteItem)
        default:
            return state
    }
}
export default numReducer;