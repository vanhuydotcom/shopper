import { endpoint } from '../service/config'
class Api {
    accessToken;
    useToken = false
    token() {
        this.useToken = true;
        return this
    }
    json(res) {
        if (res.status === 200) {
            return res.json()
        }
        return new Promise((resolve, reject) => { })

    }
    async refreshToken() {
        let refreshToken = JSON.parse(localStorage.getItem('token'))?.refreshToken
        if (refreshToken) {
            let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
                method: 'POST',
                body: JSON.stringify({ refreshToken }),
                headers: {
                    'Content-Type': 'application/json'

                }
            }).then(res => res.json())
            if (res.data.accessToken) {
                localStorage.setItem('token', JSON.stringify(res.data))
            }
            console.log(res?.data?.accessToken);
        }
        return true;
    }
    _setUpHeaders() {
        let headers = {
            "Content-Type": "application/json",
        }
        if (this.useToken) {
            let token = JSON.parse(localStorage.getItem('token'))
            if (token?.accessToken) {
                headers.Authorization = `Bearer ${token.accessToken}`
            }
        }
        this.useToken = false
        return headers
    }

    async request(url, option) {
        let response = await fetch(url, option)
        if (response.status === 200) {
            return response
        }
        if (response.status === 403) {
            await this.refreshToken()
            let token = JSON.parse(localStorage.getItem('token'))
            if (token?.accessToken) {
                option.headers.Authorization = `Bearer ${token.accessToken}`
            }
            return fetch(url, option)
        }
        return new Promise((resolve, reject) => { })
    }

    get(url) {
        let headers = this._setUpHeaders();
        return this.request(`${endpoint}${url}`, { headers }).then(this.json);
    }
    post(url, data = {}) {
        let headers = this._setUpHeaders()
        let body = JSON.stringify(data)
        return this.request(`${endpoint}${url}`, {
            method: 'POST',
            headers,
            body
        }).then(this.json)

    }
    put(url, data = {}) {
        let headers = this._setUpHeaders();
        let body = JSON.stringify(data)

        return this.request(`${endpoint}${url}`, {
            method: 'PUT',
            headers,
            body
        }).then(this.json)
    }
    delete(url) {
        let headers = this._setUpHeaders()
        return this.request(`${endpoint}${url}`, {
            method: 'DELETE',
            headers,

        }).then(this.json)
    }
}
export default new Api()