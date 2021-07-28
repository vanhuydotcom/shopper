import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import authReducer from './reducer/authReducer'
import cartReducer from './reducer/cartReducer';
import orderReducer from './reducer/orderReducer';
import { pageReducer } from './reducer/pageReducer';
import productReducer from './reducer/productReducer'
import userReducer from './reducer/userReducer';
import saga from './saga'
// import cart from './reducer/cart';
let reducer = combineReducers({
    order: orderReducer,
    // cart: cart,
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    page: pageReducer
});
const middleWare = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState());
    } else {
        next(action);
    }
};
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

//conect redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(middleWare, sagaMiddleware)));
// then run the saga
sagaMiddleware.run(saga)
export default store;
