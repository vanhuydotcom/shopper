import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslate } from "../../../core/useTranslate";
import { addMoreCard, decreaseItemCart, delItemCart, increaseItemCart } from "../../../redux/action/cartAction";
import { currency } from "../../../util";

export default function CartItem({ name, thumbnail_url, slug, real_price, cartNum, _id }) {
    let { t } = useTranslate()
    let dispatch = useDispatch()
    let [input, setInput] = useState(cartNum)
    useEffect(() => {
        setInput(cartNum)
    }, [cartNum])
    const inputChange = (e) => {
        setInput(
            e.target.value
        )
    }
    const handleAddMoreCard = (e) => {
        if (e.charCode === 13) {
            let inputNumber = parseInt(input)
            if (input > 0) {

                dispatch(addMoreCard({ _id, inputNumber }))
            } else {
                dispatch(delItemCart(_id))
            }
        }

    }
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4">
                    {/* Image */}
                    <Link to={`/product/${slug}`}>
                        <img src={thumbnail_url} alt="..." className="img-fluid" />
                    </Link>
                </div>
                <div className="col">
                    {/* Title */}
                    <div className="d-flex mb-2 font-weight-bold">
                        <Link className="text-body" to={`/product/${slug}`}>{name}</Link>
                    </div>
                    <div className="mb-2 font-size-sm">
                        <span className="ml-auto">{t('Price')}: {currency(real_price * cartNum)}</span>
                    </div>
                    {/* Text */}
                    {/* <p className="mb-7 font-size-sm text-muted">
                        Color: Brown
                    </p> */}
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                        <button className="cart__item-button" onClick={() => dispatch(decreaseItemCart({ _id, real_price }))} >-</button>
                        <input className="cart__item-num" type='number' value={input} onChange={inputChange} onKeyPress={handleAddMoreCard} />
                        <button className="cart__item-button" onClick={() => dispatch(increaseItemCart({ _id, real_price }))}>+</button>
                        <a className="font-size-xs text-gray-400 ml-auto" href="" onClick={() => dispatch(delItemCart(_id))}>
                            <i className="fe fe-x" /> {t('Remove')}
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}