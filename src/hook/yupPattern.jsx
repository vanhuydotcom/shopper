import * as yup from 'yup'


const nameRegex = /[a-zA-Z][a-zA-Z ]{2,}/i
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i
const facebookRegex = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/i

yup.addMethod(yup.string, 'name', function (
    message,
) {
    return this.matches(nameRegex, {
        message,
        excludeEmptyString: true,
    })
})
yup.addMethod(yup.string, 'email', function (
    message,
) {
    return this.matches(emailRegex, {
        message,
        excludeEmptyString: true,
    })
})
yup.addMethod(yup.string, 'url', function (
    message,
) {
    return this.matches(urlRegex, {
        message,
        excludeEmptyString: true,
    })
})
yup.addMethod(yup.string, 'phone', function (
    message,
) {
    return this.matches(phoneRegex, {
        message,
        excludeEmptyString: true,
    })
})
yup.addMethod(yup.string, 'facebook', function (
    message,
) {
    return this.matches(facebookRegex, {
        message,
        excludeEmptyString: true,
    })
})
export default yup