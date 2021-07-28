import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import yup from "../../../../hook/yupPattern"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addAddress } from "../../../../redux/action/userAction"

import { useTranslate } from "../../../../core/useTranslate"
export default function Address() {
    let { t } = useTranslate()
    let history = useHistory()
    let dispatch = useDispatch()
    let { _id } = useParams()
    let schema = yup.object().shape({
        first_name: yup.string().required('Do not leave blank').name('Not a valid name '),
        last_name: yup.string().required('Do not leave blank').name('Not a valid name '),
        email: yup.string().required('Do not leave blank').email('Not a valid email address'),
        company: yup.string().required('Do not leave blank'),
        country: yup.string().required('Do not leave blank').name('Not a valid country'),
        address: yup.string().required('Do not leave blank'),
        city: yup.string().required('Do not leave postcode'),
        phone: yup.string().required('Do not leave blank').phone('Not a valid phone'),
        // default_delivery: yup.bool(),
        default: yup.bool()
    })
    let { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        dispatch(addAddress(data))
        history.push('/account/address')
    }
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Heading */}
            <h6 className="mb-7">
                {t(' Add Address')}
            </h6>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* First Name */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingFirstName">{t('First Name ')}*</label>
                            <input {...register('first_name')} className="form-control form-control-sm" id="checkoutBillingFirstName" type="text" placeholder="First Name" />
                            {errors?.first_name && <p className="error_text">{errors.first_name?.message}</p>}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Last Name */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingLastName">{t('Last Name')} *</label>
                            <input  {...register('last_name')} className="form-control form-control-sm" id="checkoutBillingLastName" type="text" placeholder="Last Name" />
                            {errors?.last_name && <p className="error_text">{errors.last_name?.message}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingEmail">{t('Email')} *</label>
                            <input {...register('email')} className="form-control form-control-sm" id="checkoutBillingEmail" type="email" placeholder="Email" />
                            {errors?.email && <p className="error_text">{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Company Name */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingCompany">{t('Company name')} *</label>
                            <input {...register('company')} className="form-control form-control-sm" id="checkoutBillingCompany" type="text" placeholder="Company name (optional)" />
                            {errors?.company && <p className="error_text">{errors.company?.message}</p>}

                        </div>
                    </div>
                    <div className="col-12">
                        {/* Country */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingCountry">{t('Country')} *</label>
                            <input {...register('country')} className="form-control form-control-sm" id="checkoutBillingCountry" type="text" placeholder="Country" />
                            {errors?.country && <p className="error_text">{errors.country?.message}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Address Line 1 */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingAddress">{t('Address Line 1')} *</label>
                            <input {...register('address')} className="form-control form-control-sm" id="checkoutBillingAddress" type="text" placeholder="Address Line 1" />
                            {errors?.address && <p className="error_text">{errors.address?.message}</p>}

                        </div>
                    </div>
                    <div className="col-12">
                        {/* Address Line 2 */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingAddressTwo">{t('Address Line 2')}</label>
                            <input {...register('address_line_2')} className="form-control form-control-sm" id="checkoutBillingAddressTwo" type="text" placeholder="Address Line 2 (optional)" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Town / City */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingTown">{t("Town / City")} *</label>
                            <input {...register('city')} className="form-control form-control-sm" id="checkoutBillingTown" type="text" placeholder="Town / City" />
                            {errors?.city && <p className="error_text">{errors.city?.message}</p>}

                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* ZIP / Postcode */}
                        <div className="form-group">
                            <label htmlFor="checkoutBillingZIP">{t('ZIP / Postcode')} *</label>
                            <input {...register('zip')} className="form-control form-control-sm" id="checkoutBillingZIP" type="number" placeholder="ZIP / Postcode" />
                            {errors?.zip && <p className="error_text">{errors.zip?.message}</p>}

                        </div>
                    </div>
                    <div className="col-12">
                        {/* Mobile Phone */}
                        <div className="form-group mb-5">
                            <label htmlFor="checkoutBillingPhone">{t('Mobile Phone ')}*</label>
                            <input {...register('phone')} className="form-control form-control-sm" id="checkoutBillingPhone" type="tel" placeholder="Mobile Phone" />
                            {errors?.phone && <p className="error_text">{errors.phone?.message}</p>}

                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="form-group">
                            <div className="custom-control custom-checkbox custom-checkbox-df mb-0">
                                <input {...register('default')} type="checkbox" className="custom-control-input" id="defaultShippingAddress" />
                                <label className="custom-control-label" htmlFor="defaultShippingAddress">Default shipping address</label>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* Button */}

                {
                    _id === ':_id' ?
                        <button className="btn btn-dark" type="submit">
                            {t('  Add Address')}
                        </button> :
                        <button className="btn btn-dark" type="submit">
                            {t(' Edit Address')}
                        </button>
                }

            </form>
        </div>
    )
}