import { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { useTranslate } from "../../../core/useTranslate"
import { addCart } from "../../../redux/action/cartAction"
import { currency } from "../../../util"

export function ProductSummary(props) {
    let { t } = useTranslate()
    let $ = window.$
    let { images, discount_rate, name, price, real_price, stock_item, configurable_options } = props
    let dispatch = useDispatch()
    let topRef = useRef()
    let bottomRef = useRef()
    let [input, setInput] = useState(1)
    const inputChange = (e) => {
        if (e.target.value <= 0) {
            setInput(parseInt(e.target.value = 1))
        } else (
            setInput(parseInt(e.target.value))
        )
    }
    const dec = (e) => {
        e.preventDefault()
        if (input > 1) {
            setInput(input - 1)
        } else {
            setInput(1)
        }
    }
    const inc = (e) => {
        e.preventDefault()
        setInput(input + 1)
    }
    useEffect(() => {
        $(topRef.current).flickity({
            draggable: false,
            fade: true,
        });
        $(bottomRef.current).flickity({
            asNavFor: "#productSlider",
            contain: true,
            wrapAround: false
        });
    }, [])
    const handleAtc = (e) => {
        e.preventDefault()
        dispatch(addCart({ ...props, cartNum: input }))

    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    {/* Card */}
                                    <div className="card">
                                        {/* Badge */}
                                        {
                                            discount_rate ? <div className="badge badge-primary card-badge text-uppercase">
                                                {discount_rate} %
                                            </div>
                                                : null
                                        }

                                        {/* Slider */}
                                        <div className="mb-4" ref={topRef} id="productSlider">
                                            {/* Item */}
                                            {
                                                images.map((e) => <a href={e.large_url}>
                                                    <img src={e.medium_url} alt="..." className="card-img-top" />
                                                </a>
                                                )
                                            }
                                        </div>
                                    </div>
                                    {/* Slider */}
                                    <div className="flickity-nav mx-n2 mb-10 mb-md-0" ref={bottomRef}>
                                        {/* Item */}
                                        {
                                            images.map((e) => (
                                                <div className="col-12 px-2" style={{ maxWidth: '113px' }}>
                                                    {/* Image */}
                                                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.medium_url})` }} />
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 pl-lg-10">
                                    {/* Header */}
                                    <div className="row mb-1">
                                        <div className="col">
                                            {/* Preheading */}
                                            {/* {
                                                inventory_status ? <a className="text-muted" href="shop.html">{inventory_status}</a>
                                                    :
                                                    <a className="text-muted" href="shop.html"></a>
                                            } */}
                                        </div>
                                        {/* <div className="col-auto">

                                            {
                                                rating_average > 0 ? (<div className="rating font-size-xs text-dark" data-value={rating_average}>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>)
                                                    :
                                                    null

                                            }

                                            <a className="font-size-sm text-reset ml-2" href="#reviews">
                                                Reviews ({review_count})
                                            </a>
                                        </div> */}
                                    </div>
                                    {/* Heading */}
                                    <h3 className="mb-2">{name}</h3>
                                    {/* Price */}
                                    <div className="mb-7">
                                        <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">{currency(price)}</span>
                                        <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{currency(real_price)}</span>
                                        <span className="font-size-sm ml-1">{stock_item.qty > 0 ? '(Còn hàng)' : '(Hết hàng)'}</span>
                                    </div>
                                    {/* Form */}
                                    <form>
                                        {
                                            configurable_options && configurable_options ? configurable_options.map((e, i) => (
                                                <div className="form-group" key={i}>
                                                    {/* Label */}
                                                    <p className='mb-5 '  >
                                                        {e.name}:{
                                                            e.values.map((e1, i1) => <strong id="colorCaption" key={i1} className={`option-value `} >{e1.label}</strong>)
                                                        }

                                                    </p>
                                                    {/* Radio */}

                                                    {/* <div className="mb-8 ml-n1">
                                                        {
                                                            configurable_products.map((e, i) => (
                                                                <div className="custom-control custom-control-inline custom-control-img" key={i} onClick={() => handleOption(i)}>
                                                                    <input type="radio" className="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="White" defaultChecked />
                                                                    <label className="custom-control-label" htmlFor="imgRadioOne">
                                                                        <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.images[0].medium_url})` }} />
                                                                    </label>
                                                                </div>
                                                            ))
                                                        }
                                                    </div> */}
                                                </div>
                                            ))
                                                :
                                                null
                                        }

                                        <div className="form-group">

                                            <div className="form-row mb-7">
                                                <div className="col-12 col-lg-auto">

                                                    <button className="custom-select custom-button mb-2" onClick={dec}>-</button>
                                                    <input className="custom-select custom-input mb-2" type='number' value={input} onChange={inputChange} />
                                                    <button className="custom-select custom-button mb-2" onClick={inc}>+</button>

                                                </div>
                                                <div className="col-12 col-lg">
                                                    {/* Submit */}
                                                    <button type="submit" className="btn btn-block btn-dark mb-2" onClick={handleAtc}  >
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
                                            {/* Text */}
                                            {/* <p>
                                                <span className="text-gray-500">Is your size/color sold out?</span>
                                                <a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the
                                                    Wait List!</a>
                                            </p> */}
                                            {/* Share */}
                                            <p className="mb-0">
                                                <span className="mr-4">Share:</span>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-pinterest-p" />
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

