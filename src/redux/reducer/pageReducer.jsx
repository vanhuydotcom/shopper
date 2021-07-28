import { STORE } from "../type";
const initialState = {
    store_location: [],
}
export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE:
            return {
                ...state,
                store_location: action.payload
            }
        default:
            return state
    }
}