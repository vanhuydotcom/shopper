import { useSelector } from "react-redux"
import { useTranslate } from "../../../core/useTranslate"
import { currency } from "../../../util"

export default function ListGroupCheckout({ fee }) {
    let { t } = useTranslate()
    let { list, amount, tax, num } = useSelector(state => state.cart)


    return (
        <>
            <h6 className="mb-7">{t('Order Items')} ({num})</h6>
            {/* Divider */}
            <hr className="my-7" />
            <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                {
                    list.map((e, i) => (
                        <li className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    {/* Image */}
                                    <a href="product.html">
                                        <img src={e.thumbnail_url} alt="..." className="img-fluid" />
                                    </a>
                                </div>
                                <div className="col">
                                    {/* Title */}
                                    <p className="mb-4 font-size-sm font-weight-bold">
                                        <a className="text-body" href="product.html">{e.name}</a> <br />
                                    </p>
                                    {/* Text */}
                                    <div className="font-size-sm text-muted">
                                        <span className="text-muted">Price: {currency(e.real_price)}</span>
                                        {/* Size: M <br />
                                Color: Red */}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="card mb-9 bg-light">
                <div className="card-body">
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                        <li className="list-group-item d-flex">
                            <span>{t('Subtotal')}</span> <span className="ml-auto font-size-sm">{currency(amount)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>{t('Tax')}</span> <span className="ml-auto font-size-sm">{currency(amount / tax)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>{t('Shipping')}</span>
                            {
                                fee && fee ? <span className="ml-auto font-size-sm">{currency(parseInt(fee[0]))}</span>
                                    : <span className="ml-auto font-size-sm">0</span>
                            }

                        </li>
                        <li className="list-group-item d-flex font-size-lg font-weight-bold">

                            <span>{t('Total')}</span>
                            {
                                fee && fee ? <span className="ml-auto">{currency(amount + amount / tax + parseInt(fee[0]))}</span>
                                    : <span className="ml-auto">{currency(amount + amount / tax + 0)}</span>
                            }

                        </li>
                    </ul>
                </div>
            </div>
            {/* Notes */}

            <textarea className="form-control form-control-sm mb-9 mb-md-0 font-size-xs" rows={5} placeholder="Order Notes (optional)" defaultValue={""} />
            <p className="mb-7 font-size-xs text-gray-500">
                {t("Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.")}
            </p>

        </>
    )
}