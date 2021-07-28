import userApi from "../../service/userApi";
import { ADD_ADDRESS, ADD_WISHLIST, CHANGE_DEFAULT_ADDRESS, DEFAULT_ADDRESS, GET_ADDRESS, REMOVE_ADDRESS, CARD_TYPE, ADD_PAYMENT, GET_PAYMENT, REMOVE_PAYMENT, CHANGE_DEFAULT_PAYMENT, GET_WISHLIST, REMOVE_WISHLIST } from "../type";

/* ERROR*/
// export function err(data) {
//     return ({
//         type: ERR,
//         payload: data
//     })
// }

/**wishlist */
export function addWishlist(wishlist) {
    return async (dispatch) => {
        let res = await userApi.addWishlist(wishlist)
        if (res) {
            dispatch({
                type: ADD_WISHLIST,
                payload: res
            })
            console.log(res);
        }
    }
}
export function getWishlist(page) {
    return async (dispatch) => {
        let res = await userApi.getWishlist(page)
        if (res) {
            dispatch({
                type: GET_WISHLIST,
                payload: res
            })
        }
    }
}

export function removeWishlist(_id) {
    return async (dispatch) => {
        let res = await userApi.removeWishlist(_id)
        if (res) {
            dispatch({
                type: REMOVE_WISHLIST,
                payload: res
            })
        }
    }
}



/*address*/
export function addAddress(address) {
    return async (dispatch) => {
        let res = await userApi.addAddress(address)
        if (res) {
            dispatch({
                type: ADD_ADDRESS,
                payload: res
            })
        }
    }
}
export function getAddress(_id) {
    return async (dispatch) => {
        let res = await userApi.getAddress(_id)
        if (res.data) {
            dispatch({
                type: GET_ADDRESS,
                payload: res.data
            })
        }
    }
}
export function removeAddress(_id) {
    return async (dispatch) => {
        let res = await userApi.removeAddress(_id)
        if (res.data) {
            dispatch({
                type: REMOVE_ADDRESS,
                payload: res.data
            })

        }
    }
}
export function changeDefaultAddress(data) {
    return async (dispatch) => {
        let res = await userApi.changeAddressDefault(data)
        if (res.data) {
            dispatch({
                type: CHANGE_DEFAULT_ADDRESS,
                payload: res.data
            })

        }
    }
}
export function defaultAddress() {
    return async (dispatch) => {
        let res = await userApi.getAddressDefault()
        if (res.data) {
            dispatch({
                type: DEFAULT_ADDRESS,
                payload: res.data
            })

        }
    }
}
/*payment*/
export function cardType(data) {
    console.log(data);
    return ({
        type: CARD_TYPE,
        payload: data
    })
}
export function addPayment(payment) {
    return async (dispatch) => {
        let res = await userApi.addPayment(payment)
        if (res) {
            dispatch({
                type: ADD_PAYMENT,
                payload: res
            })
        }
    }
}
export function getPayment(_id) {
    return async (dispatch) => {
        let res = await userApi.getPayment(_id)
        if (res.data) {
            dispatch({
                type: GET_PAYMENT,
                payload: res.data
            })
        }
    }
}
export function removePayment(_id) {
    return async (dispatch) => {
        let res = await userApi.removePayment(_id)
        if (res.data) {
            dispatch({
                type: REMOVE_PAYMENT,
                payload: res.data
            })
        }
    }
}
export function changeDefaultPayment(_id) {
    return async (dispatch) => {
        let res = await userApi.changePaymentDefault(_id)
        if (res.data) {
            dispatch({
                type: CHANGE_DEFAULT_PAYMENT,
                payload: res.data
            })
        }
    }
}


