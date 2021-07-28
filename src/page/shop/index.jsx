import React, { useEffect } from 'react'
import { Pagination } from "../../component/Pagination";
import ShopBreadcrumb from "./component/ShopBreadcrumb";
import ShopProduct from "./component/ShopProduct";
import ShopSidebar from "./component/ShopSidebar";
import Slider from "./component/Slider";
import { convertObjToQuery, convertQueryToObj } from '../../util';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesAction, productAction } from '../../redux/action/productAction';
import { LOADING } from '../../redux/type';
export default function Shop() {
    let { paginate, product, loading } = useSelector(state => state.product)
    let dispatch = useDispatch()
    let objUrl = convertQueryToObj()
    let queryString = convertObjToQuery(objUrl)
    useEffect(() => {
        dispatch({
            type: LOADING
        })
        dispatch(categoriesAction())
        dispatch(productAction(queryString))
    }, [queryString])
    if (!product) return loading
    return (
        <section className="py-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        {/* Filters */}
                        <ShopSidebar />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        {/* Slider */}
                        <Slider />
                        {/* Breadcrumb */}
                        <ShopBreadcrumb />
                        {/* Products */}
                        <ShopProduct />
                        {/* Pagination */}
                        <Pagination {...paginate} />
                    </div>
                </div>
            </div>
        </section>
    )
}