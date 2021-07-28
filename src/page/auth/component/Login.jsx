import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslate } from '../../../core/useTranslate'
import useFormValidate from '../../../hook/useFormValidate'
import { loginAction } from '../../../redux/action/authAction'
import Auth from '../../../service/auth'

export const Login = () => {
    let { t } = useTranslate()
    let { error, form, inputChange, check } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        },
        mes: {
            username: {
                required: 'Please enter your user name',
                pattern: 'User name is not valid'
            },
            password: {
                required: 'Please enter your user name',
                pattern: 'Password is not valid'

            }
        }
    })
    let dispatch = useDispatch()
    let [loginError, setLoginError] = useState({
        login: {},
        error: ''
    })
    async function LoginHandle(e) {
        let error = check();
        e.preventDefault()
        if (Object.keys(error).length === 0) {
            let res = await Auth.login({
                username: form.username,
                password: form.password
            })
            if (res.data) {
                dispatch(loginAction(res.data))
            }
            if (res.error) {
                setLoginError({
                    ...loginError,
                    error: res.error
                })
            }
        }
    }
    return (
        <>
            <div className="col-12 col-md-6">
                {/* Card */}
                <div className="card card-lg mb-10 mb-md-0">
                    <div className="card-body">
                        {/* Heading */}
                        <h6 className="mb-7">{t('Returning Customer')}</h6>
                        {/* Form */}
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="loginEmail">
                                            {t('Email Address')} *
                                        </label>
                                        <input value={form.username} name="username" onChange={inputChange} className="form-control form-control-sm" id="loginEmail" placeholder="Email Address *" />
                                        {
                                            error.username && <p className="error_text">{error.username}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Password */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="loginPassword">
                                            {t('Password')} *
                                        </label>
                                        <input value={form.password} name='password' onChange={inputChange} className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" />
                                        {
                                            error.password && <p className="error_text">{error.password}</p>
                                        }

                                    </div>
                                </div>
                                <div className="col-12 col-md">
                                    {/* Remember */}
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="loginRemember">
                                                {t('Remember me')}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-auto">
                                    {/* Link */}
                                    <div className="form-group">
                                        <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">{t('Forgot Password')}?</a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Button */}
                                    <button className="btn btn-sm btn-dark" type="submit" onClick={LoginHandle}>
                                        {t('Sign In')}
                                    </button>
                                </div>
                                {
                                    loginError.error && (
                                        <p className="error_text">{loginError.error}</p>
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}