import { call, select } from 'redux-saga/effects'
import cartApi from '../../service/cartApi'
export function* cart() {
    let store = yield select() //yield select() gọi tới store redux 
    if (store.auth.login) {
        yield call(cartApi.create, store.cart)
    }
}
// export function* getCartFormUser() {
//     let { cart } = yield select()
//     let cartUser = yield call(cartApi.getCartFromUser)
//     console.log(cartUser);
//     yield put(getCart({
//         ...cart,
//         list: cartUser.list
//     }),
//         console.log('1')
//     )
// }