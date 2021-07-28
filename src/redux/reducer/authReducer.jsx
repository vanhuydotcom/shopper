import { LOGIN, LOGOUT, REGISTER, UPDATE_PROFILE } from '../type'

let initState = {
    login: JSON.parse(localStorage.getItem('login')) || false,
}
export default function authReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('login', JSON.stringify(action.payload))
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            return {
                ...state,
                login: action.payload
            }
        case LOGOUT:
            localStorage.setItem('login', false)
            localStorage.removeItem('token')
            return {
                ...state,
                login: false
            }
        case REGISTER:
            localStorage.setItem('login', JSON.stringify(action.payload))
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            return {
                ...state,
                login: action.payload
                // rule: tự động login khi đăng ký thành công
            }
        case UPDATE_PROFILE:
            localStorage.setItem('login', JSON.stringify(action.payload))
            return {
                ...state,
                login: action.payload
            }
        default:
            return state;
    }

}
