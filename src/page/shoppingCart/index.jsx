import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useTranslate } from "../../core/useTranslate";
import CartItem from "./component/CartItem";
import RightSidebar from "./component/RightSidebar";
export default function ShoppingCart() {
    let { t } = useTranslate()
    let { list, num } = useSelector(state => state.cart)
    if (num === 0) return <Redirect to='/shop' />
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Heading */}
                        <h3 className="mb-10 text-center">{t('Shopping Cart')}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        {/* List group */}
                        <ul className="list-group list-group-lg list-group-flush-x mb-6">
                            {
                                list.map((e, i) => <CartItem key={i} {...e} />)
                            }
                        </ul>
                        {/* Footer */}
                        <div className="row align-items-end justify-content-between mb-10 mb-md-0">
                            <div className="col-12 col-md-7">
                                {/* Coupon */}
                                <form className="mb-7 mb-md-0">
                                    <label className="font-size-sm font-weight-bold" htmlFor="cartCouponCode">
                                        {t('Coupon code')}:
                                    </label>
                                    <div className="row form-row">
                                        <div className="col">
                                            {/* Input */}
                                            <input className="form-control form-control-sm" id="cartCouponCode" type="text" placeholder="Enter coupon code*" />
                                        </div>
                                        <div className="col-auto">
                                            {/* Button */}
                                            <button className="btn btn-sm btn-dark" type="submit">
                                                {t('Apply')}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* 
                             */}
                        </div>
                    </div>
                    <RightSidebar />
                </div>
            </div>
        </section>
    )
}