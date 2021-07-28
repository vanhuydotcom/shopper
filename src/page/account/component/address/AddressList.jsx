import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { changeDefaultAddress, getAddress, removeAddress } from '../../../../redux/action/userAction'
import { useTranslate } from '../../../../core/useTranslate'
export default function AddressList() {
    let { t } = useTranslate()
    let dispatch = useDispatch()
    let { address } = useSelector(state => state.user)
    console.log(address);
    let { _id } = useRouteMatch().params
    useEffect(() => {
        dispatch(getAddress())
    }, [])
    const _lock = (e) => {
        if (!e.default) {
            dispatch(changeDefaultAddress({ _id: e._id }))
            setTimeout(() => {
                dispatch(getAddress())
            }, 500);
        }
    }
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
                {/* Card */}
                {address && address?.map((e, i) => <AddressItem _lock={_lock.bind(null, e)} key={i} {...e} />)}
                <div className="col-12">
                    {/* Button */}
                    <Link className="btn btn-block btn-lg btn-outline-border" to={`/account/address/create-new/${_id ? _id : ':_id'}`}>
                        {t(' Add Address')} <i className="fe fe-plus" />
                    </Link>
                </div>
            </div>
        </div >
    )
}
function AddressItem(props) {
    let { t } = useTranslate()
    let { first_name, last_name, email, company, country, address, city, zip, phone, _id, _lock } = props
    let { path } = useRouteMatch()
    let history = useHistory()
    let dispatch = useDispatch()
    let ref = useRef()

    const _remove = () => {
        dispatch(removeAddress(_id))
        setTimeout(() => {
            dispatch(getAddress())
        }, 500);
    }
    const _edit = () => {
        dispatch(removeAddress(_id))
        setTimeout(() => {
            dispatch(getAddress())
        }, 500);
        history.push(`${path}/edit/${_id}`)
    }
    // const _lock = (e) => {
    //     if (!e.default) {
    //         dispatch(changeDefaultAddress(props))
    //     }
    // }
    return (
        <div className="col-12 col-lg-6">
            <div className="card card-lg bg-light mb-8">
                <div className="card-body">

                    <h6 className="mb-6">
                        {
                            props?.default ? 'Default Shipping Address' : "Address"
                        }

                    </h6>
                    <p className="text-muted mb-0">
                        {first_name} {last_name}<br />
                        {email}<br />
                        {company}<br />
                        {country}<br />
                        {address} <br />
                        {city} <br />
                        {zip} <br />
                        {phone}<br />
                    </p>
                    <div className="card-action card-action-right">
                        <button className="btn btn-xs btn-circle btn-white-primary hover" href="#" onClick={_remove} >
                            <i className="fe fe-x" />
                        </button>
                        <button className="btn btn-xs btn-circle btn-white-primary hover" onClick={_edit}>
                            <i className="fe fe-edit-2" />
                        </button>
                        <button className={`btn btn-xs btn-circle btn-white-primary hover ${props.default ? 'btn-active-df' : ''}`} onClick={_lock} >
                            <i className="fe fe-lock" />
                        </button>
                    </div>
                </div>
            </div >
        </div >

    )
}