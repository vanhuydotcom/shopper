import Api from '../core/Api'
const userApi = {

    update: (data) => {
        return Api.token().post('/update-profile', data)
    },

    /**wishlist */
    addWishlist: (product) => {
        return Api.token().post('/ecommerce/v1/profile/wishlist', product)
    },
    getWishlist: () => {
        return Api.token().get(`/ecommerce/v1/profile/wishlist`)
    },
    removeWishlist: (_id) => {
        return Api.token().delete(`/ecommerce/v1/profile/wishlist/${_id}`)
    },


    /**address */
    addAddress: (data) => {
        return Api.token().post('/ecommerce/v1/profile/address', data)
    },
    getAddress: (_id) => {
        return Api.token().get(`/ecommerce/v1/profile/address${_id ? '/' + _id : ''}`)
    },
    removeAddress: (_id) => {
        return Api.token().delete(`/ecommerce/v1/profile/address/${_id}`)
    },
    getAddressDefault: () => {
        return Api.token().get(`/ecommerce/v1/profile/address-default`)
    },
    changeAddressDefault: (data) => {
        return Api.token().post(`/ecommerce/v1/profile/address-default`, data)
    },

    /**payment */
    addPayment: (data) => {
        return Api.token().post('/ecommerce/v1/profile/payment', data)
    },
    getPayment: (_id) => {
        return Api.token().get(`/ecommerce/v1/profile/payment${_id ? '/' + _id : ''}`)
    },
    removePayment: (_id) => {
        return Api.token().delete(`/ecommerce/v1/profile/payment/${_id}`)
    },
    changePaymentDefault: (data) => {
        return Api.token().post(`/ecommerce/v1/profile/payment-default`, data)
    },
    getPaymentDefault: (_id) => {
        return Api.token().get(`/ecommerce/v1/profile/payment-default`)
    },
    //fake data to use customer review
    
}



export default userApi