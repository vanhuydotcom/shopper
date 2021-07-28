import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslate } from '../../../core/useTranslate'
import useFormValidate from '../../../hook/useFormValidate'
import { registerAction } from '../../../redux/action/authAction'
import Auth from '../../../service/auth'

export const Register = () => {
    let { t } = useTranslate()
    let { error, form, inputChange, check } = useFormValidate({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    }, {
        rule: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            email: {
                required: true,
                pattern: 'email',
            },
            password: {
                required: true,
                min: 6,
                max: 32
            },
            confirm_password: {
                required: true,
                match: 'password'
            }
        },
        mes: {
            first_name: {
                required: 'Please enter your first name',
            },
            last_name: {
                required: 'Please enter your last name',
            },
            email: {
                required: 'Please enter your email',
                pattern: 'Your mail is not valid',
            },
            password: {
                required: 'Please enter your password',

            },
            confirm_password: {
                required: 'Please enter your password again',
                match: 'Type your password again'
            }
        }
    }
    )
    let [registerError, setRegisterError] = useState({
        register: {},
        error: ''
    })
    let dispatch = useDispatch()
    async function RegisterHandle(e) {
        let error = check();
        e.preventDefault()
        if (Object.keys(error).length === 0) {
            let res = await Auth.register({
                first_name: form.first_name,
                last_name: form.last_name,
                email: form.email,
                password: form.password,
                confirm_password: form.confirm_password
            })
            if (res.data) {
                dispatch(registerAction(res.data))
            }
            if (res.error) {
                setRegisterError({
                    ...registerError,
                    error: res.error
                })
            }
        }
    }
    return (
        <>
            <div className="col-12 col-md-6">
                {/* Card */}
                <div className="card card-lg">
                    <div className="card-body">
                        {/* Heading */}
                        <h6 className="mb-7">{t('New Customer')}</h6>
                        {/* Form */}
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="registerfirst_name">
                                            {t('First Name')} *
                                        </label>
                                        <input name='first_name' value={form.first_name} onChange={inputChange} className="form-control form-control-sm" id="registerfirst_name" type="text" placeholder="First Name *" />
                                        {
                                            error.first_name && <p className="error_text">{error.first_name}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="registerlast_name">
                                            {t('Last Name')} *
                                        </label>
                                        <input name='last_name' value={form.last_name} onChange={inputChange} className="form-control form-control-sm" id="registerlast_name" type="text" placeholder="Last Name *" />
                                        {
                                            error.last_name && <p className="error_text">{error.last_name}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="registerEmail">
                                            {t('Email Address')} *
                                        </label>
                                        <input name='email' value={form.email} onChange={inputChange} className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *" />
                                        {
                                            error.email && <p className="error_text">{error.email}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Password */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="registerPassword">
                                            {t("Password")} *
                                        </label>
                                        <input name='password' value={form.password} onChange={inputChange} className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" />
                                        {
                                            error.password && <p className="error_text">{error.password}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Password */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="registerPasswordConfirm">
                                            {t("Confirm Password")} *
                                        </label>
                                        <input name='confirm_password' value={form.confirm_password} onChange={inputChange} className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" />
                                        {
                                            error.confirm_password && <p className="error_text">{error.confirm_password}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-auto">
                                    {/* Link */}
                                    <div className="form-group font-size-sm text-muted">
                                        {t('By registering your details, you agree with our Terms & Conditions, and Privacy and Cookie Policy.')}
                                    </div>
                                </div>
                                <div className="col-12 col-md">
                                    {/* Newsletter */}
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="registerNewsletter">
                                                {t('Sign me up for the Newsletter!')}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Button */}
                                    <button className="btn btn-sm btn-dark" type="submit" onClick={RegisterHandle}>
                                        {t('Register')}
                                    </button>

                                </div>
                                {
                                    registerError.error && (
                                        <p className="error_text">{registerError.error}</p>

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