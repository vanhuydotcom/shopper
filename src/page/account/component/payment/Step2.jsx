import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import yup from '../../../../hook/yupPattern'
import { useTranslate } from '../../../../core/useTranslate'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment } from '../../../../redux/action/userAction'
import { useHistory } from 'react-router-dom'
export default function Step2() {
    let { t } = useTranslate()
    let { card_type } = useSelector(state => state.user)
    let dispatch = useDispatch()
    let history = useHistory()
    let schema = yup.object().shape({
        id: yup.string().required("Don't leave blank"),
        name: yup.string().required("Don't leave blank"),
        cvv: yup.string().required("Don't leave blank").max(3, 'Not a valid Cvv').min(3, 'Not a valid Cvv'),
        default: yup.bool()
    })
    let { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    let yearNow = (new Date()).getFullYear()
    const onSubmit = (data) => {
        dispatch(addPayment({ card_type, data }))
        history.push('/account/payment')
        // window.location.reload()
    }
    return (
        <>
            {/* Heading */}
            <h6 className="mb-7 mb-7-custom" >
                Add {card_type?.payment && card_type?.payment ? card_type?.payment : ''}
            </h6>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="cardNumber">{t('Card Number')} *</label>
                            <input {...register('id')} className="form-control" id="cardNumber" type="text" placeholder="Card Number" />
                            {errors && <p className='error_text'> {errors?.id?.message}</p>}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="nameOnCard">{t('Name on Card')} *</label>
                            <input {...register('name')} className="form-control" id="nameOnCard" type="text" placeholder="Name on Card" />
                            {errors && <p className='error_text'> {errors?.name?.message}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Label */}
                        <label>
                            {t(' Expiry Date ')}*
                        </label>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="paymentMonth">{t('Month')}</label>

                            <select {...register('month')} className="custom-select " id="paymentMonth">
                                <option value="1">{t('January')}</option>
                                <option value="2" >{t('February')}</option>
                                <option value="3" >{t('March')}</option>
                                <option value="4" >{t('April')} </option>
                                <option value="5" >{t('May')}</option>
                                <option value="6" >{t('June')}</option>
                                <option value="7" >{t('July')}</option>
                                <option value="8" >{t('August')}</option>
                                <option value="9" >{t('September')}</option>
                                <option value="10" >{t('October')}</option>
                                <option value="11" >{t('November')} </option>
                                <option value="12" >{t('December')}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="paymentCardYear">{t('Year')}</label>

                            <select {...register('year')} className="custom-select" id="paymentCardYear">
                                {
                                    [].map.bind([...Array(50)])((e, i) => <option value={yearNow - 50 / 2 + i} key={i}>{yearNow - 50 / 2 + i}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <div className="input-group input-group-merge">
                                <input {...register('cvv')} className="form-control" id="paymentCardCVV" type="text" placeholder="CVV *" />
                                <div className="input-group-append">
                                    <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards." data-original-title title>
                                        <i className="fe fe-help-circle" />
                                    </span>
                                </div>
                            </div>
                            {errors && <p className='error_text'> {errors?.cvv?.message}</p>}

                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="form-group">
                            <div className="custom-control custom-checkbox mb-3">
                                <input {...register('default')} type="checkbox" className="custom-control-input" id="defaultPaymentMethod" />
                                <label className="custom-control-label" htmlFor="defaultPaymentMethod">Default payment method</label>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* Button */}
                <button className="btn btn-dark" type="submit">
                    {t(' Add Card')}
                </button>
            </form>
        </>
    )
}