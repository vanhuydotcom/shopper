import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslate } from '../../core/useTranslate'
import { currency } from '../../util'
export const Product = () => {
    let { t } = useTranslate()
    let { product_detail } = useSelector(state => state.product)
    return ReactDOM.createPortal(
        <div className="modal fade" id="modalProduct" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Content */}
                    <div className="container-fluid px-xl-0">
                        <div className="row align-items-center mx-xl-0">
                            <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                                {/* Image */}
                                <img className="img-fluid" src={product_detail[0]?.thumbnail_url} alt="..." />
                                {/* Button */}
                                <Link className="btn btn-sm btn-block btn-primary" to={`/product/${product_detail[0]?.slug}`}>
                                    {t(' More Product Info')} <i className="fe fe-info ml-2" />
                                </Link>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                                {/* Heading */}
                                <h4 className="mb-3">{product_detail[0]?.name}</h4>
                                {/* Price */}
                                <div className="mb-7">
                                    <span className="h5">{currency(product_detail[0]?.real_price)}</span>
                                    {/* <span className="font-size-sm">(In Stock)</span> */}
                                </div>
                                {/* Form */}
                                <form>
                                    <div className="form-group">
                                        {/* Label */}
                                        {
                                            product_detail[0]?.configurable_options && product_detail[0]?.configurable_options.map((e, i) => (
                                                <p>
                                                    {e?.name && e?.name ? e.name : ''}:
                                                    {
                                                        e?.values.map((e1, i1) => (
                                                            <strong id="modalProductColorCaption" key={i1}> {e1?.label ? e1?.label : ''}</strong>
                                                        ))
                                                    }
                                                </p>
                                            ))
                                        }

                                        {/* Radio */}
                                        {/* <div className="mb-8 ml-n1">
                                            <div className="custom-control custom-control-inline custom-control-img">
                                                <input type="radio" className="custom-control-input" id="modalProductColorOne" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" defaultValue="White" defaultChecked />
                                                <label className="custom-control-label" htmlFor="modalProductColorOne">
                                                    <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-7.jpg)' }} />
                                                </label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-img">
                                                <input type="radio" className="custom-control-input" id="modalProductColorTwo" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" defaultValue="Black" />
                                                <label className="custom-control-label" htmlFor="modalProductColorTwo">
                                                    <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-49.jpg)' }} />
                                                </label>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="form-row">
                                            <div className="col-12 col-lg-auto">
                                                {/* Quantity */}
                                                <select className="custom-select mb-2">
                                                    <option value={1} selected>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-lg">
                                                {/* Submit */}
                                                <button type="submit" className="btn btn-block btn-dark mb-2">
                                                    {t('Add to Cart')} <i className="fe fe-shopping-cart ml-2" />
                                                </button>
                                            </div>
                                            <div className="col-12 col-lg-auto">
                                                {/* Wishlist */}
                                                <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                                                    {t('Wishlist')} <i className="fe fe-heart ml-2" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root')

    )
}