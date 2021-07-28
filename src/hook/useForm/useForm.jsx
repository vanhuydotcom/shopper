import { useState } from 'react'
import { useDispatch } from 'react-redux'


let namePattern = /[a-zA-Z][a-zA-Z ]{2,}/i
let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
let urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i
let fbPattern = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/i
export function useForm(initialForm, validate) {
    let [form, setForm] = useState(initialForm)
    let [error, setError] = useState({})
    function inputChange(e) {
        let name = e.target.name
        let value = e.target.value
        form[name] = value

        // setForm({
        //     ...form,
        //     [name]: value

        // })
    }
    function check() {
        let errorObject = {}
        let { rule, mes } = validate
        if (!mes) {
            mes = {}
        }
        for (let i in rule) {
            let r = rule[i]
            let m = mes[i] || {}
            if (r.required && !form[i]?.trim()) {
                errorObject[i] = m?.required || 'Not valid';
                continue;
            }
            if (r.pattern && form[i]) {
                let { pattern } = r
                if (pattern === 'name') pattern = namePattern

                if (pattern === 'email') pattern = emailPattern
                if (pattern === 'phone') pattern = phonePattern
                if (pattern === 'website') pattern = urlPattern
                if (pattern === 'fb') pattern = fbPattern
                if (!pattern?.test(form[i])) {
                    errorObject[i] = m?.pattern || 'Not valid'
                }
            }
            if (r.min) {
                if (form[i].length < r.min) {
                    errorObject[i] = m?.min || `Passwords must be at least ${r.min} characters`
                } else if (form[i].length > r.max) {
                    errorObject[i] = m?.max || `Passwords must be at most ${r.max} characters`

                }
            }
            if (r.match && form[r.match]) {
                if (form[r.match] !== form[i]) {
                    errorObject[i] = m?.[i]?.match || `Type your ${r.match} again`
                }
            }
        }
        setError(errorObject)
        return errorObject
    }
    function register(name, rule) {
        if (rule) {
            if (!validate.rule) validate = {}
            validate.rule[name] = rule
        }
        return {
            name,
            onChange: inputChange,
            defaultValue: form[name]
        }
    }
    function handleSubmit(callback) {
        return ((e) => {
            e.preventDefault();
            let error = check()
            if (Object.keys(error).length === 0) {
                callback(form)
            }
        })
    }
    return {
        register,
        handleSubmit,
        error,
        check,
        form,
        inputChange
    }

}