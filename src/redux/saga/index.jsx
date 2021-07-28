import { takeLatest } from 'redux-saga/effects'
import { cart } from './cartSaga'
export default function* saga() {
  // yield takeLatest('LOGIN', getCartFormUser)
  yield takeLatest(['ADD_CART',
    'DEL_ITEM_CART',
    'INCREASE_ITEM_CART',
    'DECREASE_ITEM_CART',
    'ADD_MORE_CART',
    'CLEAR_CART',
  ],
    cart)
}
