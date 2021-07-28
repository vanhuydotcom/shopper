import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { useTranslate } from "../../../core/useTranslate";
import yup from "../../../hook/yupPattern";
import { updateProfileAction } from "../../../redux/action/authAction";
import userApi from "../../../service/userApi";
export default function PersonalInfo() {
    let { t } = useTranslate()
    let auth = useSelector(state => state.auth)
    let dispatch = useDispatch()
    let schema = yup.object().shape({
        first_name: yup.string().required("Don't leave blank").name('Not a valid name'),
        last_name: yup.string().required("Don't leave blank").name('Not a valid name'),
        // email: yup.string(),
        password: yup.string(),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
        // gender: yup.string().required('please choose gender')

    })
    let { register, handleSubmit, formState: { errors } } = useForm({
        method: "onChange",
        resolver: yupResolver(schema)
    })

    let yearNow = (new Date()).getFullYear()
    let [day, setDay] = useState()
    let [month, setMonth] = useState(1)
    let [year, setYear] = useState(yearNow)
    useEffect(() => {
        let date = new Date(year, month, day);
    })
    function dateChange(e) {
        let name = parseInt(e.target.name)
        let value = parseInt(e.target.value)
        if (name === 'year') setYear(parseInt(value))
        if (name === 'month') setMonth(parseInt(value))
        if (name === 'day') setDay(parseInt(value))
    }
    let date = new Date(year, month, 0);
    let dayArr = date.getDate()
    async function onSubmit(data) {
        console.log(data);
        let res = await userApi.update(data)
        if (res.data) {
            dispatch(updateProfileAction(res.data))
        }
    }
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountfirst_name">{t('First Name')}* </label>
                            <input className="form-control form-control-sm" id="accountfirst_name" type="text" placeholder="First Name *" {...register("first_name", { value: auth?.login?.first_name })} />
                            {errors && <p className='error_text'>{errors?.first_name?.message} </p>}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="accountlast_name">{t('Last Name')} *  </label>
                            <input className="form-control form-control-sm" id="accountlast_name" type="text" placeholder="Last Name *" {...register('last_name', { value: auth?.login?.last_name })} />
                            {errors && <p className='error_text'>{errors?.last_name?.message} </p>}
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountEmail">{t('Email Address')} *</label>
                            <input defaultValue={auth?.login?.email} className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" disabled />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="accountPassword">{t('New Password')} * </label>
                            <input className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" {...register('password')} />
                            {errors && <p className='error_text'>{errors?.password?.message} </p>}

                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="AccountNewPassword">{t('Confirm Password')} * </label>
                            <input className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" {...register('confirm_password')} />
                            {errors && <p className='error_text'>{errors?.confirm_password?.message} </p>}
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Birthday */}
                        <div className="form-group">
                            {/* Label */}
                            <label>{t('Date of Birth')}</label>
                            {/* Inputs */}
                            <div className="form-row">
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountDate">
                                        {t('Date')}
                                    </label>
                                    <select {...register('day', { value: auth?.login?.day ? auth?.login?.day : day })} onChange={dateChange} className="custom-select custom-select-sm" id="accountDate">
                                        {
                                            [...Array(dayArr)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="col">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountMonth">
                                        {t('Month')}
                                    </label>
                                    <select {...register('month', { value: auth?.login?.month ? auth?.login?.month : month })} onChange={dateChange} className="custom-select custom-select-sm" id="accountMonth">
                                        {
                                            [...Array(12)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountYear">
                                        {t('Year')}
                                    </label>
                                    <select {...register('year', { value: auth?.login?.year ? auth?.login?.year : year })} onChange={dateChange} className="custom-select custom-select-sm" id="accountYear">
                                        {
                                            [...Array(50)].map((e, i) => <option value={yearNow - i} key={i}>{yearNow - i}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Gender */}
                        <div className="form-group mb-8">
                            <label>{t('Gender')}</label>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className={`btn btn-sm btn-outline-border ${auth?.login?.gender === "Male" ?
                                    'active' : ''

                                    }`}>
                                    <input  {...register('gender')} value='Male' type="radio" /> {t('Male')}
                                </label>
                                <label className={`btn btn-sm btn-outline-border ${auth?.login?.gender === "Female" ?
                                    'active' : ''

                                    }`}>
                                    <input {...register('gender')} value='Female' type="radio" /> {t('Female')}
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <button className="btn btn-dark" type="submit">{t('Save Changes')}</button>
                    </div>
                </div>
            </form>
        </div>)
}