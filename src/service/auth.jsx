import Api from '../core/Api';
const Auth = {
    login: (data) => {
        return Api.post("/login", data);
    },
    register: (data) => {
        return Api.post("/register", data);
    },
}
export default Auth
