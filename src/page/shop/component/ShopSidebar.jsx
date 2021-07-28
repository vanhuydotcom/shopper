import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory, useRouteMatch } from "react-router-dom"
import { CATEGORIES_TITLE } from "../../../redux/type"
import { convertObjToQuery, convertQueryToObj } from "../../../util"
export default function ShopSidebar() {
    let dispatch = useDispatch()
    let { url } = useRouteMatch()
    let history = useHistory()
    let { categories } = useSelector(state => state.product)
    const handleClickCategory = (e) => {
        dispatch({
            type: CATEGORIES_TITLE,
            payload: e,
        })
    }
    let objUrl = convertQueryToObj()

    if (objUrl.page) {
        delete objUrl.page
    }
    let minRef = useRef()
    let maxRef = useRef()
    function _apply(e) {
        e.preventDefault()
        if (minRef.current.value || maxRef.current.value) {
            if (minRef.current.value) {
                objUrl.min = minRef.current.value.trim()
            } else {
                delete objUrl.min
            }
            if (maxRef.current.value) {
                objUrl.max = maxRef.current.value.trim()
            } else {
                delete objUrl.max
            }
            delete objUrl.page
        }
        let queryString = convertObjToQuery(objUrl)
        history.push(url + "?" + queryString)
    }
    return (
        <>
            {/* Filters */}
            <form className="mb-10 mb-md-0">
                <ul className="nav nav-vertical" id="filterNav">
                    <li className="nav-item">
                        {/* Toggle */}
                        <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
                            Category
                        </a>
                        {/* Collapse */}
                        <div className="form-group">
                            <ul className="list-styled mb-0" id="productsNav">
                                {/* <li className="list-styled-item">
                                    <Link exact className="list-styled-link" to="/shop">
                                        {t('All Product')}
                                    </Link>

                                </li> */}
                                {
                                    categories.map(e => <li key={e._id} className="list-styled-item">
                                        <Link className={`list-styled-link`} to={`/shop?${convertObjToQuery({ ...objUrl, categories: e.id })}`}
                                            onClick={() => handleClickCategory(e)}>
                                            {e.title}
                                        </Link></li>)
                                }
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* Toggle */}
                        <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#priceCollapse">
                            Price
                        </a>
                        {/* Collapse */}
                        <div className="collapse show" id="priceCollapse" data-toggle="simplebar" data-target="#priceGroup">
                            {/* Form group*/}
                            {/* <div className="form-group form-group-overflow mb-6" id="priceGroup">
                                <div className="custom-control custom-checkbox mb-3">
                                    <input ref={radioRef} className="custom-control-input" id="priceOne" type="radio" name='choice_price' value={value.a} />
                                    <label className="custom-control-label" htmlFor="priceOne">
                                        $10.00 - $49.00
                          </label>
                                </div>
                                <div ref={radioRef} className="custom-control custom-checkbox mb-3">
                                    <input className="custom-control-input" id="priceTwo" type="radio" name='choice_price' value={value.b} />
                                    <label className="custom-control-label" htmlFor="priceTwo">
                                        $50.00 - $99.00
                          </label>
                                </div>
                                <div ref={radioRef} className="custom-control custom-checkbox mb-3">
                                    <input className="custom-control-input" id="priceThree" type="radio" name='choice_price' value={value.c} />
                                    <label className="custom-control-label" htmlFor="priceThree">
                                        $100.00 - $199.00
                          </label>
                                </div>
                                <div ref={radioRef} className="custom-control custom-checkbox">
                                    <input className="custom-control-input" id="priceFour" type="radio" name='choice_price' value={value.d} />
                                    <label className="custom-control-label" htmlFor="priceFour">
                                        $200.00 and Up
                          </label>
                                </div>
                            </div> */}
                            {/* Range */}
                            <div className="d-flex align-items-center">
                                {/* Input */}
                                <input ref={minRef} defaultValue={objUrl.min} type="number" className="form-control form-control-xs" placeholder="1.000 vnđ" />
                                {/* Divider */}
                                <div className="text-gray-350 mx-2">‒</div>
                                {/* Input */}
                                <input ref={maxRef} defaultValue={objUrl.max} type="number" className="form-control form-control-xs" placeholder="100.000.000 vnđ" />
                            </div>
                            <button class="btn btn-dark btn-price" onClick={_apply}>Apply</button>
                        </div>
                    </li>
                </ul>
            </form>
        </>
    )
}