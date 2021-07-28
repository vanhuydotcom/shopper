import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import yup from '../../../../hook/yupPattern'
import { useDispatch } from 'react-redux'
import { cardType } from '../../../../redux/action/userAction'
import { useTranslate } from '../../../../core/useTranslate'

export default function Step1() {
    let { t } = useTranslate()
    let dispatch = useDispatch()
    let schema = yup.object().shape({
        payment: yup.mixed('Please select a payment method').required('Please select a payment method')
    })
    let { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })


    const onSubmit = (data) => {
        dispatch(cardType(data))
    }
    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Card */}
                <div className="form-group card card-sm border">
                    <div className="card-body">
                        {/* Radio */}
                        <div className="custom-control custom-radio">
                            {/* Input */}
                            <input {...register('payment')} value='Debit / Credit card' className="custom-control-input collapsed" id="checkoutPaymentCard" type="radio" />
                            {/* Label */}
                            <label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                {t(' I want to add Debit / Credit Card')} <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                            </label>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className="form-group card card-sm border">
                    <div className="card-body">
                        {/* Radio */}
                        <div className="custom-control custom-radio">
                            {/* Input */}
                            <input {...register('payment')} value='Paypal' className="custom-control-input" id="checkoutPaymentPaypal" type="radio" />
                            {/* Label */}
                            <label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                {t('I want to add PayPal')} <img src="/img/brands/color/paypal.svg" alt="..." />
                            </label>
                        </div>
                    </div>
                </div>
                {errors && <p className='error_text'>{errors?.payment?.message}</p>}
                {/* Button */}
                <button className="btn btn-dark" type="submit" >
                    {t(' Continue')} <i className="fe fe-arrow-right ml-2" />
                </button>
            </form>

        </>
    )
}
