import reduxToolkit from "../../core/reduxToolkit"

let cart = JSON.parse(localStorage.getItem('cart'))
const initialState = {
    list: cart?.list || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0,
    tax: cart?.tax || 10,
}
const onCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart
}
export const cal = (list) => {
    let num = list.reduce((accumulator, currentValue) => accumulator + currentValue.cartNum, 0)
    let amount = list.reduce((accumulator, currentValue) => accumulator + currentValue.real_price * currentValue.cartNum, 0)
    return {
        num,
        amount
    }
}
let { action, reducer, TYPE } = reduxToolkit({
    initialState,
    name: 'cart',
    reducers: {
        addCart: (state, action) => {
            state.cart = action.payload.data
            let { list, num, amount } = cart;
            console.log("state", state);
            console.log("cart", cart);

            let index = list.findIndex((e) => e._id === action.payload._id)
            let cartNum = action.payload.cartNum || 1
            if (index !== -1) {
                list[index].cartNum += cartNum
            } else {
                let item = JSON.parse(JSON.stringify(action.payload))
                item.cartNum = cartNum
                list.push(item)
            }

            return onCart({
                ...state,
                cart,
                ...cal(list)
            })
        }
    }
})
export default reducer
export const CART = TYPE
export const { addCart } = action

// export const addCartAction = (cart) => {
//     return async (dispatch) => {
//         //  state.cart = action.payload
//         let res = await cartApi.create(cart)
//         if (res) {
//             dispatch({
//                 type: CART.addCart,
//                 payload: res
//             })
//             console.log(res);
//         }
//     }
// };
