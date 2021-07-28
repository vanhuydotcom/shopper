import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useTranslate } from '../../core/useTranslate'
import yup from '../../hook/yupPattern'
import { addDoc } from '../../service/firebase/service'
export const Footer = () => {
    let { t } = useTranslate()
    let [success, setSuccess] = useState(null)
    let schema = yup.object().shape({
        email: yup.string().required('Cannot be left blank').email('Email not be valid '),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        addDoc('notify', { data })
        if (data) {
            setSuccess("It's success")
        }
    }
    const _clear = () => {
        document.querySelector('#form-ft').reset()
    }
    return (
        <>
            {/* FOOTER */}
            <footer className="bg-dark bg-cover @@classList" style={{ backgroundImage: 'url(/img/patterns/pattern-2.svg)' }}>
                <div className="py-12 border-bottom border-gray-700">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                                {/* Heading */}
                                <h5 className="mb-7 text-center text-white">{t('Want style Ideas and Treats ?')}</h5>
                                {/* Form */}
                                <form className="mb-11" onSubmit={handleSubmit(onSubmit)} id="form-ft">
                                    <div className="form-row align-items-start">
                                        <div className="col">
                                            <input {...register('email')} type="email" className="form-control form-control-gray-700 form-control-lg" placeholder="Enter Email *" />
                                            {errors && <p className='error_text' style={{ color: '#fff' }}>{errors?.email?.message}</p>}
                                            {success && <p className='error_text' style={{ color: '#fff' }}>{success}</p>}
                                        </div>
                                        <div className="col-auto">
                                            <button onClick={_clear} type="submit" className="btn btn-gray-500 btn-lg">{t('Subscribe')}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-3">
                                {/* Heading */}
                                <h4 className="mb-6 text-white">Shopper.</h4>
                                {/* Social */}
                                <ul className="list-unstyled list-inline mb-7 mb-md-0">
                                    <li className="list-inline-item">
                                        <a href="#!" className="text-gray-350">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="text-gray-350">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="text-gray-350">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="text-gray-350">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="text-gray-350">
                                            <i className="fab fa-medium" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm">
                                {/* Heading */}
                                <h6 className="heading-xxs mb-4 text-white">
                                    {t('Support')}
                                </h6>
                                {/* Links */}
                                <ul className="list-unstyled mb-7 mb-sm-0">
                                    <li>
                                        <Link className="text-gray-300" to="/contact-us">{t('Contact Us')}</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300" to="/faq">{t('FAQs')}</Link>
                                    </li>
                                    {/* <li>
                                        <a className="text-gray-300" data-toggle="modal" to="#modalSizeChart">{t('Size Guide')}</a>
                                    </li> */}
                                    <li>
                                        <Link className="text-gray-300" to="/shipping-and-return">{t('Shipping & Returns')}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm">
                                {/* Heading */}
                                <h6 className="heading-xxs mb-4 text-white">
                                    {t('Shop')}
                                </h6>
                                {/* Links */}
                                <ul className="list-unstyled mb-7 mb-sm-0">
                                    <li>
                                        <Link className="text-gray-300" to="/shop?sort=real_price.-1">Advance Shopping</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300" to="/shop?sort=rating_average.-1">Customer Review</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300" to="/shop?sort=discount_rate.-1">Discounts</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm">
                                {/* Heading */}
                                <h6 className="heading-xxs mb-4 text-white">
                                    {t('Company')}
                                </h6>
                                {/* Links */}
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link className="text-gray-300" to="/About">About Us</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300" to="#!">Careers</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300" to="#!">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm">
                                {/* Heading */}
                                <h6 className="heading-xxs mb-4 text-white">
                                    {t(" Contact")}
                                </h6>
                                {/* Links */}
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-gray-300" to="#!">1-202-555-0105</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-300" to="#!">1-202-555-0106</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-300" to="#!">help@shopper.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* Copyright */}
                                <p className="mb-3 mb-md-0 font-size-xxs text-muted">
                                    © 2019 All rights reserved. Designed by Unvab.
                                </p>
                            </div>
                            <div className="col-auto">
                                {/* Payment methods */}
                                <img className="footer-payment" src="/img/payment/mastercard.svg" alt="..." />
                                <img className="footer-payment" src="/img/payment/visa.svg" alt="..." />
                                <img className="footer-payment" src="/img/payment/amex.svg" alt="..." />
                                <img className="footer-payment" src="/img/payment/paypal.svg" alt="..." />
                                <img className="footer-payment" src="/img/payment/maestro.svg" alt="..." />
                                <img className="footer-payment" src="/img/payment/klarna.svg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}