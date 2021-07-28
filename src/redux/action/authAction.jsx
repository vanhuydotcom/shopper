import { LOGIN, LOGOUT, REGISTER, UPDATE_PROFILE } from '../type'
export function loginAction(data) {
    return {
        type: LOGIN,
        payload: data
    }
}
export function logoutAction() {
    return {
        type: LOGOUT,
    }
}
export function registerAction(data) {
    return {
        type: REGISTER,
        payload: data
    }
}
export function updateProfileAction(data) {
    return {
        type: UPDATE_PROFILE,
        payload: data
    }
}