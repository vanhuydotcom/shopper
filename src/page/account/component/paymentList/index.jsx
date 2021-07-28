import React from 'react'
import { useHistory, useParams, useRouteMatch } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { useEffect } from 'react'
import { changeDefaultPayment, getPayment, removePayment } from '../../../../redux/action/userAction'
import { useTranslate } from '../../../../core/useTranslate'

export default function PaymentList() {
    let { t } = useTranslate()
    let { payment, card_type } = useSelector(state => state.user)
    let history = useHistory()
    let { _id } = useParams()
    let { path } = useRouteMatch()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPayment())

    }, [])
    const _addNew = () => {
        history.push(`${path}/create-new/${_id ? _id : ':_id'}`)
        if (card_type?.payment) {
            window.location.reload()
        }
    }
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
                {/* Card */}
                {
                    payment && payment.map((e, i) => <CardItem key={i} {...e} />)
                }
                <div className="col-12">
                    {/* Button */}
                    <button className="btn btn-block btn-lg btn-outline-border" onClick={_addNew} >
                        {t(' Add Payment Method')} <i className="fe fe-plus" />
                    </button>
                </div>
            </div>
        </div>

    )
}
const CardItem = (props) => {
    let { t } = useTranslate()

    let { card_type, data, _id } = props

    let { path } = useRouteMatch()
    let history = useHistory()
    let dispatch = useDispatch()
    const _remove = () => {
        dispatch(removePayment(_id))
        setTimeout(() => {
            dispatch(getPayment())
        }, 500);
    }
    const _edit = () => {
        dispatch(removePayment(_id))
        setTimeout(() => {
            dispatch(getPayment())
        }, 500);
        history.push(`${path}/edit/${_id}`)
    }
    let [state, setState] = useState(data?.default)
    console.log(state);
    const _lock = (e) => {
        if (!e.default) {
            dispatch(changeDefaultPayment(props))
            setTimeout(() => {
                dispatch(getPayment())
            }, 500);
        } else {
            setState(state = e?.default)
            console.log(state);
        }
    }

    return (
        <div className="col-12 col-lg-6">
            <div className="card card-lg bg-light mb-8">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-6">
                        {card_type?.payment}
                    </h6>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>{t('Card Number')}:</strong> <br />
                        <span className="text-muted">{data?.id}</span>
                    </p>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>{t('Expiry Date')}:</strong> <br />
                        <span className="text-muted">{data?.month}/{data?.year}</span>
                    </p>
                    {/* Text */}
                    <p className="mb-0">
                        <strong>{t('Name on Card')}:</strong> <br />
                        <span className="text-muted">{data?.name}</span>
                    </p>
                    {/* Action */}
                    <div className="card-action card-action-right">
                        {/* Button */}
                        <button className="btn btn-xs btn-circle btn-white-primary hover" onClick={_remove}>
                            <i className="fe fe-x" />
                        </button>
                        {/* Button */}
                        <button className="btn btn-xs btn-circle btn-white-primary hover" onClick={_edit}>
                            <i className="fe fe-edit-2" />
                        </button>
                        <button className={`btn btn-xs btn-circle btn-white-primary hover ${props?.default ? 'btn-active-df' : ''}`} onClick={_lock} >
                            <i className="fe fe-lock" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}