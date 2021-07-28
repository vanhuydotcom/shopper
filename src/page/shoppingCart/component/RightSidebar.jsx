import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useTranslate } from "../../../core/useTranslate"
import { currency } from "../../../util"

export default function RightSidebar() {
    let { t } = useTranslate()
    let { amount, tax } = useSelector(state => state.cart)

    return (
        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
            {/* Total */}
            <div className="card mb-7 bg-light">
                <div className="card-body">
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                        <li className="list-group-item d-flex">
                            <span>{t('Subtotal')}</span> <span className="ml-auto font-size-sm">{currency(amount)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>{t('Tax')}</span> <span className="ml-auto font-size-sm">{currency(amount / tax)}</span>
                        </li>
                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                            <span>{t('Total')}</span> <span className="ml-auto font-size-sm">{currency(amount + amount / tax)}</span>
                        </li>
                        <li className="list-group-item font-size-sm text-center text-gray-500">
                            {t('Shipping cost calculated at Checkout')} *
                        </li>
                    </ul>
                </div>
            </div>
            {/* Button */}
            <Link className="btn btn-block btn-dark mb-2" to="/checkout">{t('Proceed to Checkout')}</Link>
            {/* Link */}
            <Link className="btn btn-link btn-sm px-0 text-body" to="/shop">
                <i className="fe fe-arrow-left mr-2" /> {t('Continue Shopping')}
            </Link>
        </div>

    )
}