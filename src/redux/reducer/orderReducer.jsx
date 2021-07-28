import { GET_ALL_ORDER, ORDER, ORDER_DETAIL } from "../type";
const initialSate = {
    order: [],
    order_detail: [],
    list: null
}

export default function orderReducer(state = initialSate, action) {
    switch (action.type) {

        case ORDER: {
            return {
                list: action.payload.data
            }
        }
        case GET_ALL_ORDER: {
            return {
                order: action.payload.data

            }
        }
        case ORDER_DETAIL: {
            return {
                ...state,
                order_detail: action.payload
            }
        }


        default:
            return state
    }
}