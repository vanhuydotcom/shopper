import PageApi from "../../service/pageApi"
import { STORE } from "../type"

export const storeAction = () => {
    return async (dispatch) => {
        let res = await PageApi.StoreApi()
        if (res.data) {
            dispatch({
                type: STORE,
                payload: res.data
            })
        }
    }
}
