import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslate } from "../../../../core/useTranslate";
import { getAllOrder } from "../../../../redux/action/orderAction";
// import { getAllOrder } from "../../../../redux/action/cartAction";
import { currency } from "../../../../util";

export default function Orders() {
    let dispatch = useDispatch()
    let { order } = useSelector(state => state.order)
    useEffect(() => {
        dispatch(getAllOrder())
    }, [])
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {
                order && order.map((e) => <OrderItem ket={e._id} {...e} />)
            }
        </div>

    )
}
const OrderItem = (props) => {
    let { t } = useTranslate()
    let { _id, amount, list, status, num } = props
    return (
        <>
            {
                num === 0 ? <></> : (
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
                                                {_id}
                                            </p>
                                        </div>
                                        {/* <div className="col-6 col-lg-3">
                                <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                                <p className="mb-lg-0 font-size-sm font-weight-bold">
                                    <time dateTime="2019-10-01">
                                        01 Oct, 2019
                                    </time>
                                </p>
                            </div>*/}
                                        <div className="col-6 col-lg-3">
                                            <h6 className="heading-xxxs text-muted">{t('Status')}:</h6>
                                            <p className="mb-0 font-size-sm font-weight-bold">
                                                {status}
                                            </p>
                                        </div>
                                        <div className="col-6 col-lg-3">
                                            {/* Heading */}
                                            <h6 className="heading-xxxs text-muted">{t('Order Amount')}:</h6>
                                            {/* Text */}
                                            <p className="mb-0 font-size-sm font-weight-bold">
                                                {currency(amount)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6">
                                    <div className="form-row mb-4 mb-lg-0">

                                        {
                                            list && list.length < 3 ?
                                                list.map((e) => (
                                                    <div className="col-3">
                                                        <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.thumbnail_url})` }} />
                                                    </div>
                                                ))
                                                : (
                                                    <>
                                                        {
                                                            list && list.map((e, i) => {
                                                                if (i < 3) return <div className="col-3">
                                                                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.thumbnail_url})` }} />
                                                                </div>
                                                            })
                                                        }
                                                        {
                                                            list && list.length - 3 != 0 ? <div className="col-3">
                                                                <div className="embed-responsive embed-responsive-1by1 bg-light">
                                                                    <address className="embed-responsive-item embed-responsive-item-text text-reset" href="#!">
                                                                        <div className="font-size-xxs font-weight-bold">
                                                                            + {list.length - 3} <br /> more
                                                                        </div>
                                                                    </address>
                                                                </div>
                                                            </div>
                                                                : <></>
                                                        }

                                                    </>)
                                        }
                                        {/* <div className="col-3">
                                <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-5.jpg)' }} />
                            </div>
                            <div className="col-3">
                                <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-112.jpg)' }} />
                            </div>
                            <div className="col-3">
                                <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-7.jpg)' }} />
                            </div>
                            <div className="col-3">
                                <div className="embed-responsive embed-responsive-1by1 bg-light">
                                    <a className="embed-responsive-item embed-responsive-item-text text-reset" href="#!">
                                        <div className="font-size-xxs font-weight-bold">
                                            +2 <br /> more
                                        </div>
                                    </a>
                                </div>
                            </div> */}
                                    </div>
                                </div>
                                {
                                    status === 'cart' ?
                                        <div className="col-12 col-lg-6">
                                            <div className="form-row">
                                                <div className="col-6">
                                                    {/* Button */}
                                                    <Link className="btn btn-sm btn-block btn-outline-dark" to={`/account/order-detail/${_id}`}>
                                                        {('Details')}
                                                    </Link>
                                                </div>
                                                <div className="col-6">
                                                    <Link className="btn btn-sm btn-block btn-outline-dark" to="/checkout">
                                                        {t(' Checkout')}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        :

                                        <div className="col-12 col-lg-6">
                                            <div className="form-row">
                                                <div className="col-12">
                                                    {/* Button */}
                                                    <Link className="btn btn-sm btn-block btn-outline-dark" to={`/account/order-detail/${_id}`}>
                                                        {t('Order Details')}
                                                    </Link>
                                                </div>
                                                {/* <div className="col-6">
                                <a className="btn btn-sm btn-block btn-outline-dark" href="#!">
                                    Track order
                                </a>
                            </div> */}
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    )
}