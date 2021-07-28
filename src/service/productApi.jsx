import { endpoint } from './config'
import Api from '../core/Api'

const ProductApi = {
    productItem(page) {
        return fetch(`${endpoint}/product?${page}`).then(res => res.json())

    },

    categories() {
        return fetch(`${endpoint}/categories`).then(res => res.json())
    },
    productItemDetail(slug) {
        return fetch(`${endpoint}/product?slug=${slug}`).then(res => res.json())

    },
    search: (keyword = '') => {
        return Api.get(`/product?search=${keyword}`)
    },

    //get data cho home page
    phoneRating() {
        return fetch(`${endpoint}/product?page=1&categories=1789&sort=rating_average.-1`).then(res => res.json())
    },
    sportRating() {
        return fetch(`${endpoint}/product?page=1&categories=1975&sort=rating_average.-1`).then(res => res.json())
    },
    consumerRating() {
        return fetch(`${endpoint}/product?page=1&categories=17166&sort=real_price.-1`).then(res => res.json())
    },
    // review(data) {
    //     return fetch('cfd6-shop.firebaseapp.com/review  ', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json())
    // },
    getReview() {
        return fetch('/local_db/review_db.json', {
            method: 'GET',
        }).then(res => res.json())
    }
}
export default ProductApi