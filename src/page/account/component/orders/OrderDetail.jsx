import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { useTranslate } from "../../../../core/useTranslate"
import { orderDetail } from "../../../../redux/action/orderAction"
import { currency } from "../../../../util"

export default function OrderDetail() {
    let { t } = useTranslate()
    let { order_detail } = useSelector(state => state.order)
    console.log(order_detail);
    let list = order_detail?.list
    let total = currency(order_detail?.amount / order_detail?.tax + order_detail?.amount + order_detail?.shippingFee)
    console.log(list);
    let { _id } = useParams()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(orderDetail(_id))
    }, [])
    let shippingMethod = [
        // 'Standard Shipping: Delivery in 5 - 7 working days',
        // 'Express Shipping: Delivery in 3 - 5 working days',
        // '1 - 2 Shipping: Delivery in 1 - 2 working days',
        // 'Free Shipping: Depending on where you live'
    ]
    switch (order_detail?.shippingFee) {
        case 20000:
            shippingMethod = 'Standard Shipping: Delivery in 5 - 7 working days'
            break;
        case 45000:
            shippingMethod = 'Express Shipping: Delivery in 3 - 5 working days'
            break;
        case 100000:
            shippingMethod = '1 - 2 Shipping: Delivery in 1 - 2 working days'
            break;
        default:
            shippingMethod = 'Free Shipping: Depending on where you live'

            break;
    }
    console.log(shippingMethod);
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            <div className="card card-lg mb-5 border">
                <div className="card-body pb-0">
                    {/* Info */}
                    <div className="card card-sm">
                        <div className="card-body bg-light">
                            <div className="row">
                                <div className="col-6 col-lg-6">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">{t('Order No')}:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">

                                        {order_detail?._id}
                                    </p>
                                </div>
                                {/* <div className="col-6 col-lg-3">
                                    <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        <time dateTime="2019-10-01">
                                            01 Oct, 2019
                                        </time>
                                    </p>
                                </div> */}
                                <div className="col-6 col-lg-2">
                                    <h6 className="heading-xxxs text-muted">{t('Status')}:</h6>
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        {order_detail?.status}
                                    </p>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <h6 className="heading-xxxs text-muted">{t('Order Amount')}:</h6>
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        {currency(order_detail?.amount)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    {/* Heading */}
                    <h6 className="mb-7">{t('Order Items')} ({order_detail?.num})</h6>
                    {/* Divider */}
                    <hr className="my-5" />
                    {/* List group */}
                    <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
                        {
                            list && list.map((e, i) => (
                                <li className="list-group-item" key={i}>
                                    <div className="row align-items-center">
                                        <div className="col-4 col-md-3 col-xl-2">
                                            <Link to="product.html"><img src={`${e?.thumbnail_url}`} alt="..." className="img-fluid" /></Link>
                                        </div>
                                        <div className="col">
                                            <p className="mb-4 font-size-sm font-weight-bold">
                                                <a className="text-body" href="product.html">{e?.name}</a> <br />
                                                <span className="text-muted">{currency(e?.real_price)}</span>
                                            </p>

                                            {/* {
                                                e?.configurable_options && e?.configurable_options.map((e1, i1) => (
                                                    <div className="font-size-sm text-muted" key={i1}>
                                                        {e1.name} : {e1?.values && e1?.values.map((e2, i2) => (
                                                            <span key={i2}>{e2.label}</span>
                                                        ))}
                                                    </div>
                                                ))
                                            } */}
                                        </div>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            {/* Total */}
            <div className="card card-lg mb-5 border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">{t('Order Total')}</h6>
                    {/* List group */}
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                        <li className="list-group-item d-flex">
                            <span>Subtotal</span>
                            <span className="ml-auto">{currency(order_detail?.amount)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Tax</span>
                            <span className="ml-auto">{currency(order_detail?.amount / order_detail?.tax)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Shipping</span>
                            <span className="ml-auto">{currency(order_detail?.shippingFee)}</span>
                        </li>
                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                            <span>Total</span>
                            <span className="ml-auto">{total}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Details */}
            {
                order_detail?.status === 'cart' ? <></> :
                    <div className="card card-lg border">
                        <div className="card-body">
                            {/* Heading */}
                            <h6 className="mb-7">{t('Shipping Details')}</h6>
                            {/* Content */}
                            <div className="row">

                                <div className="col-12 col-md-6">
                                    {/* Heading */}
                                    <p className="mb-6 font-weight-bold">
                                        {t('Shipping Address')}:
                                    </p>
                                    <p className="mb-7 mb-md-0 text-gray-500">
                                        {order_detail?.first_name} {order_detail?.last_name}, <br />
                                        {order_detail?.address}, <br />
                                        {order_detail?.city},  {order_detail?.zip}, <br />
                                        {order_detail?.country}, <br />
                                        {order_detail?.phone}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Heading */}
                                    <p className="mb-6 font-weight-bold">
                                        {t('Shipping Method')}:
                                    </p>
                                    <p className="mb-7 text-gray-500">
                                        {shippingMethod}
                                    </p>
                                    {/* Heading */}
                                    <p className="mb-6 font-weight-bold">
                                        {t('Payment Method')}:
                                    </p>
                                    <p className="mb-0 text-gray-500">
                                        {order_detail?.paymentMethod}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </div>
    )
}