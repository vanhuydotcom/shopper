import { useSelector } from "react-redux"
import { useHistory, useRouteMatch } from "react-router"
import { useTranslate } from "../../../core/useTranslate"
import { convertObjToQuery, convertQueryToObj } from "../../../util"

export default function ShopBreadcrumb() {
    let { t } = useTranslate()
    let { path } = useRouteMatch()
    let history = useHistory()
    let { categories_title } = useSelector(state => state.product)
    let title = categories_title?.title
    let category = {
        title: t('All Product'),
        link: '/shop'
    }
    let queryString = convertObjToQuery()
    function sortChange(e) {
        let objUrl = convertQueryToObj()
        objUrl.sort = e.target.value // sort sap xep cac phan tu trong mang va tra ve mang moi
        delete objUrl.page
        let queryString = convertObjToQuery(objUrl)
        history.push(`${path}?${queryString}`)
    }
    return (
        <>
            <div className="row align-items-center mb-7">
                <div className="col-12 col-md">
                    {/* Heading */}
                    {/* <h3 className="mb-1">{categories_title.title}</h3> */}

                    {categories_title ?
                        (<h3 className="mb-1">{title}</h3>)
                        :
                        (<h3 className="mb-1">{category.title}</h3>)
                    }

                    {/* Breadcrumb */}
                    <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                        <li className="breadcrumb-item">
                            <a className="text-gray-400" href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active">
                            {title}
                        </li>
                    </ol>
                </div>
                <div className="col-12 col-md-auto">
                    {/* Select */}
                    <select className="custom-select custom-select-xs" onChange={sortChange}>
                        <option selected={queryString.sort === ''} value="">Sort by</option>
                        <option selected={queryString.sort === "real_price.1"} value="real_price.1" >Price low to hight</option>
                        <option selected={queryString.sort === "real_price.-1"} value="real_price.-1">Price hight to low</option>
                        <option selected={queryString.sort === "rating_average.1"} value="rating_average.-1">Custumer review</option>
                        <option selected={queryString.sort === "discount_rate.1"} value="discount_rate.-1">Discount</option>
                    </select>
                </div>
            </div>
            {/* Tags */}
            {/* <div className="row mb-7">
                <div className="col-12">
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        Shift dresses <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        Summer <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        M <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        White <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        Red <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        Adidas <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        $10.00 - $49.00 <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        $50.00 - $99.00 <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                </div>
            </div> */}

        </>
    )
}