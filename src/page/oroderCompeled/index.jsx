import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { useTranslate } from "../../core/useTranslate"
import { clearCart } from "../../redux/action/cartAction"

export default function OrderCompleted() {
    let { t } = useTranslate()
    let { _id } = useParams()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearCart())
    })
    return (
        <>
            {/* CONTENT */}
            <section className="py-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                            {/* Icon */}
                            <div className="mb-7 font-size-h1">❤️</div>
                            {/* Heading */}
                            <h2 className="mb-5">{t('Your Order is Completed!')}</h2>
                            {/* Text */}
                            <p className="mb-7 text-gray-500">
                                {t('Your order')} <span className="text-body text-decoration-underline">{_id}</span> {t('has been completed. Your order details are shown for your personal accont')}.
                            </p>
                            {/* Button */}
                            <Link className="btn btn-dark" to="/account/orders" >
                                {t('View My Orders')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}