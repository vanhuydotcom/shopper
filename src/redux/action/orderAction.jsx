// /*order*/
import cartApi from "../../service/cartApi";
import { ORDER, GET_ALL_ORDER, ORDER_DETAIL, } from "../type";

export function orderAction(data) {
    return async (dispatch) => {
        let res = await cartApi.order(data)
        if (res) {
            dispatch({
                type: ORDER,
                payload: res
            })
        }
    }
}
export function getAllOrder() {
    return async (dispatch) => {
        let res = await cartApi.getAllOrder()
        if (res) {
            dispatch({
                type: GET_ALL_ORDER,
                payload: res
            })
        }
    }
}
export function orderDetail(_id) {
    return async (dispatch) => {
        let res = await cartApi.getOrder(_id)
        if (res.data) {
            dispatch({
                type: ORDER_DETAIL,
                payload: res.data
            })
        }
    }
}