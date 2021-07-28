import { Rating } from "@material-ui/lab"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useTranslate } from "../../../core/useTranslate"
import { addCart } from "../../../redux/action/cartAction"
import { currency } from "../../../util"

export function ProductReplace() {
    let { t } = useTranslate()
    let { product } = useSelector(state => state.product)
    return (

        <section className="pt-11">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Heading */}
                        <h4 className="mb-10 text-center">{t('You might also like')}</h4>
                        {/* Items */}
                        <div className="row">
                            {
                                product.map(function (e, i) {
                                    if (i < 4)
                                        return (
                                            <ReplaceItem key={i} {...e} />
                                        )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}
const ReplaceItem = (props) => {
    const { discount_rate, thumbnail_url, name, price, real_price, rating_average, discount, slug } = props
    let out_price = currency(price),
        discount_price = currency(real_price)
    let dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addCart({ ...props }))
    }
    return (
        <div className="col-6 col-md-4 col-lg-3">
            {/* Card */}
            <div className="card mb-7">



                {
                    discount_rate > 0 ? (<div className="badge badge-white card-badge card-badge-left text-uppercase">
                        {discount_rate}%
                    </div>) : null
                }

                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <Link className="card-img-hover" to={`/product/${slug}`}>
                        <img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
                        <img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
                    </Link>
                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onClick={handleAddToCart}>
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>




                <div className="card-body px-0">

                    <div className="font-weight-bold">
                        <a className="text-body" href="product.html">
                            {name}
                        </a>
                    </div>



                    <div class="rating font-size-sm text-dark" data-value={rating_average} >
                        <div class="rating-item">
                            <Rating defaultValue={rating_average} precision={0.5} />
                        </div>
                    </div>
                    <div className="font-weight-bold">

                        {
                            discount === 0 ? (<>
                                <span className="font-size-xs text-gray-350 text-decoration-line-through"></span>
                                <span className="text-primary">{out_price} </span>
                            </>
                            )
                                : (
                                    <>
                                        <span className="font-size-xs text-gray-350 text-decoration-line-through">{out_price}</span>
                                        <span className="text-primary">{discount_price} </span>
                                    </>)
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}