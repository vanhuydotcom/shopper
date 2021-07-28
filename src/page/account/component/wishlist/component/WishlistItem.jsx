import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Skeleton } from "@material-ui/lab"
import { useTranslate } from "../../../../../core/useTranslate"
import { getProductDetail } from "../../../../../redux/action/productAction"
import { getWishlist, removeWishlist } from "../../../../../redux/action/userAction"
import { convertObjToQuery, convertQueryToObj, currency } from "../../../../../util"

export default function WishlistItem(props) {
    let { thumbnail_url, name, slug, discount, price, real_price, _id } = props
    let { loading } = useSelector(state => state.user)
    let { t } = useTranslate()
    let dispatch = useDispatch()
    const _remove = () => {
        dispatch(removeWishlist(_id))
        setTimeout(() => {

            let objUrl = convertQueryToObj()
            let queryString = convertObjToQuery(objUrl)
            dispatch(getWishlist(queryString))
        }, 1000);
    }
    return (
        <div className="col-6 col-md-4">
            <div className="card mb-7">
                {/* Image */}
                <div className="card-img">
                    {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={_remove}>
                        <i className="fe fe-x" />
                    </button>
                    {/* Button */}
                    {
                        loading ? <Skeleton variant='rect' width='100%' /> :

                            <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct" onClick={dispatch.bind(null, getProductDetail(slug))}>
                                <i className="fe fe-eye mr-2 mb-1" /> {t('Quick View')}
                            </button>
                    }
                    {/* Image */}
                    {
                        loading ? <Skeleton variant='rect' width='100%' height={180} />
                            :
                            <img className="card-img-top" src={thumbnail_url} alt="..." />
                    }
                </div>
                {/* Body */}
                <div className="card-body font-weight-bold text-center">
                    {
                        loading ? <Skeleton variant='rect' width='100%' height={20} />
                            : (
                                <>
                                    <Link className="text-body text-wrap" to={`/product/${slug}`}>{name}</Link>
                                    {

                                        discount > 0 ? <> <span className="font-size-xs text-gray-350 text-decoration-line-through">{currency(price)}</span> <br></br></>
                                            : <></>
                                    }
                                    <span className="text-primary">{currency(real_price)}</span>
                                </>)
                    }
                </div>
            </div>
        </div>
    )
}