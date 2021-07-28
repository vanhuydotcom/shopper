import { ADD_ADDRESS, ADD_WISHLIST, CHANGE_DEFAULT_ADDRESS, DEFAULT_ADDRESS, GET_ADDRESS, CARD_TYPE, REMOVE_ADDRESS, ADD_PAYMENT, GET_PAYMENT, GET_WISHLIST, REMOVE_WISHLIST, LOADING_WISHLIST, CHANGE_DEFAULT_PAYMENT } from "../type";
let user = []
const initState = {
    error: '',
    wishlist: user?.wishlist || [],
    paginate: null,
    address: user?.address || [],
    payment: user?.payment || [],
    card_type: [],
    loading: false
}
export default function userReducer(state = initState, action) {
    switch (action.type) {

        case LOADING_WISHLIST: {
            return {
                ...state,
                loading: true
            }
        }

        case ADD_WISHLIST: {
            let { wishlist } = state
            return {
                ...state,
                wishlist,
                error: action.payload.error

            }
        }

        case GET_WISHLIST: {
            return {
                ...state,
                wishlist: action.payload,
                paginate: action.payload.paginate,
                loading: false

            }
        }
        case REMOVE_WISHLIST: {

            return {
                ...state,
                wishlist: action.payload
            }
        }

        case ADD_ADDRESS: {
            let { address } = state
            return {
                ...state,
                address
            }
        }
        case GET_ADDRESS: {
            return {
                ...state,
                address: action.payload
            }
        }
        case REMOVE_ADDRESS: {
            return {
                ...state,
                address: action.payload
            }
        }
        case DEFAULT_ADDRESS: {
            return {
                address: action.payload
            }
        }
        case CHANGE_DEFAULT_ADDRESS: {
            let { address } = state
            return {
                ...state,
                address
            }
        }

        /***payment */
        case CARD_TYPE: {
            return {
                card_type: action.payload
            }
        }
        case ADD_PAYMENT: {
            let { payment } = state
            return {
                ...state,
                payment
            }
        }
        case GET_PAYMENT: {
            return {
                ...state,
                payment: action.payload
            }
        }

        case CHANGE_DEFAULT_PAYMENT: {
            let { payment } = state
            return {
                ...state,
                payment,
            }
        }











        // case ADD_WISHLIST: {
        //     let { list } = state
        //     let index = list.findIndex((e) => e._id === action.payload._id)
        //     console.log(index);
        //     localStorage.setItem(JSON.stringify)
        //     return {
        //         ...state,
        //         list
        //     }
        // }
        default:
            return state
    }
}