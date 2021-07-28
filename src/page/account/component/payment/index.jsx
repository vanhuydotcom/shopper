import React from 'react'
import { useSelector } from 'react-redux'
import Step1 from './Step1'
import Step2 from './Step2'


export default function Payment() {

    let { card_type } = useSelector(state => state.user)
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {
                card_type && card_type?.payment ? <Step2 /> : <Step1 />
            }
        </div>
    )
}
