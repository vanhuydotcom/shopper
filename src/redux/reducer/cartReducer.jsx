import { ADD_CART, ADD_MORE_CART, CLEAR_CART, DECREASE_ITEM_CART, DEL_ITEM_CART, GET_CART, INCREASE_ITEM_CART } from "../type";
let cart = JSON.parse(localStorage.getItem('cart'))
const initialSate = {
    list: cart?.list || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0,
    tax: cart?.tax || 10,
}
const returnCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart
}
function cal(list) {
    let num = list.reduce((accumulator, currentValue) => accumulator + currentValue.cartNum, 0)
    let amount = list.reduce((accumulator, currentValue) => accumulator + currentValue.real_price * currentValue.cartNum, 0)
    return {
        num,
        amount
    }
}
export default function cartReducer(state = initialSate, action) {
    switch (action.type) {

        case ADD_CART:
            {
                let { list } = state;
                let index = list.findIndex((e) => e._id === action.payload._id)
                let cartNum = action.payload.cartNum || 1
                if (index !== -1) {
                    list[index].cartNum += cartNum
                } else {
                    let item = JSON.parse(JSON.stringify(action.payload))
                    item.cartNum = cartNum
                    list.push(item)
                }
                // num = list.reduce((accumulator, currentValue) => accumulator + currentValue.cartNum, 0)
                // amount = list.reduce((accumulator, currentValue) => accumulator + currentValue.real_price * currentValue.cartNum, 0)
                return returnCart({
                    ...state,
                    list,
                    ...cal(list)
                })
            };

        case DECREASE_ITEM_CART: {
            let { list } = state
            let index = list.findIndex(e => e._id === action.payload._id)
            if (index !== -1) {
                // num -= 1
                // amount -= list[index].real_price
                if (list[index].cartNum > 1) {
                    list[index].cartNum -= 1
                } else {
                    list.splice(index, 1)
                }
            }
            return returnCart({
                ...state,
                list,
                ...cal(list)
            })
        };
        case INCREASE_ITEM_CART: {
            let { list } = state
            let index = list.findIndex(e => e._id === action.payload._id)
            if (index !== -1) {
                list[index].cartNum += 1
                // num += 1
                // amount += list[index].real_price
            }
            return returnCart({
                ...state,
                list,
                ...cal(list)
            })
        };
        case DEL_ITEM_CART: {
            let { list } = state
            let index = list.findIndex(e => e._id === action.payload)
            if (index !== -1) {
                // num -= list[index].cartNum
                // amount -= list[index].cartNum * list[index].real_price
                list.splice(index, 1)
            }
            return returnCart({
                ...state,
                list,
                ...cal(list)
            })
        };
        case ADD_MORE_CART: {
            let { list } = state
            let index = list.findIndex(e => e._id === action.payload._id)
            // num -= list[index].cartNum
            // amount -= list[index].cartNum * list[index].real_price
            if (index !== -1) {
                list[index].cartNum = action.payload.inputNumber
            }
            // num += action.payload.inputNumber
            // amount += action.payload.inputNumber * list[index].real_price
            return returnCart({
                ...state,
                list,
                ...cal(list)
            }
            )
        };
        case GET_CART: {
            let newCart = action.payload.list.filter(e => {               // lọc lấy cart với cart trả ề từ ApiGetCart
                let index = state.list.findIndex(e1 => e1._id === e._id)   //
                return index === -1
            }) || []
            newCart = newCart.concat(state.list)
            return returnCart({
                ...state,
                list: newCart,
                ...cal(newCart)
            })
        }

        case CLEAR_CART: {
            return returnCart({
                list: [],
                num: 0,
                amount: 0,
                tax: 10,

            })
        }


        default:
            return state
    }
}