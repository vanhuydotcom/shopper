import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../../../component";
import { getWishlist } from "../../../../redux/action/userAction";
import { LOADING_WISHLIST } from "../../../../redux/type";
import { convertObjToQuery, convertQueryToObj } from "../../../../util";
import WishlistItem from "./component/WishlistItem";

export default function Wishlist() {
    let { wishlist, paginate } = useSelector(state => state.user)
    let objUrl = convertQueryToObj()
    let queryString = convertObjToQuery(objUrl)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: LOADING_WISHLIST
        })
        dispatch(getWishlist(queryString))
    }, [queryString])
    return (

        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Products */}
            <div className="row">
                {
                    wishlist?.data && wishlist?.data.map((e, i) => <WishlistItem key={i} {...e} />)
                }
            </div>

            {/* Pagination */}
            <Pagination {...paginate} />
        </div>
    )
}