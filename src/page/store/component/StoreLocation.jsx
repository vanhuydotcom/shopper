import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTranslate } from "../../../core/useTranslate"
import { storeAction } from "../../../redux/action/pageAction"

export default function StoreLocation() {
    let dispatch = useDispatch()
    let { store_location } = useSelector(state => state.page)
    useEffect(() => {
        dispatch(storeAction())
    }, [])
    let [ifr, setIfr] = useState(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.214314001466!2d106.71979661407106!3d10.79489126180622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c45a742e67%3A0x4b5d7cec7bdebb18!2sThe%20Landmark%2081!5e0!3m2!1svi!2s!4v1626933777812!5m2!1svi!2s "
    )
    let [index, setIndex] = useState(0)
    const _click = (i) => {
        setIfr(store_location[i].map)
        setIndex(i)
    }
    return (
        <section className="py-12 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 col-lg-4">
                        {/* Card */}
                        {
                            store_location && store_location ?
                                <div className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 shadow custom-bar" style={{ overflowY: 'auto' }} >

                                    {
                                        store_location.map((e, i) => <StoreItem
                                            key={i}
                                            {...e}
                                            onClick={() => _click(i)}
                                            active={index === i}
                                        />)
                                    }



                                </div>
                                : <></>
                        }

                    </div>
                    <div className="col-12 col-md-7 col-lg-8">
                        {/* Map */}
                        <div className="embed-responsive embed-responsive-4by3">
                            <div className="embed-responsive-item" data-toggle="map" data-markers="[{&quot;position&quot;: [53.5508748,9.9985808], &quot;info&quot;: &quot;<div class=\&quot;card card-sm\&quot;><div class=\&quot;card-body\&quot;><p class=\&quot;mb-2 font-weight-bold\&quot;>Baldwin Hills Crenshaw Plaza</p><p class=\&quot;mb-3 text-gray-500\&quot;>Mönckebergstrasse 11 20095 Hamburg, Germany</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Phone:</p><p class=\&quot;mb-3 text-grat-500\&quot;>6-146-389-574</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Store Hours:</p><p class=\&quot;mb-0 text-grat-500\&quot;>10 am - 10 pm EST, 7 days a week</p></div>&quot;}, {&quot;position&quot;: [45.4646477,9.1935083], &quot;info&quot;: &quot;<div class=\&quot;card card-sm\&quot;><div class=\&quot;card-body\&quot;><p class=\&quot;mb-2 font-weight-bold\&quot;>Stonewood Center</p><p class=\&quot;mb-3 text-gray-500\&quot;>Largo Corsia Dei Servi 3 20122 Milan, Italy</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Phone:</p><p class=\&quot;mb-3 text-grat-500\&quot;>6-146-389-574</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Store Hours:</p><p class=\&quot;mb-0 text-grat-500\&quot;>10 am - 10 pm EST, 7 days a week</p></div>&quot;}, {&quot;position&quot;: [53.332769,-6.2663917], &quot;info&quot;: &quot;<div class=\&quot;card card-sm\&quot;><div class=\&quot;card-body\&quot;><p class=\&quot;mb-2 font-weight-bold\&quot;>Shalyapin Palace</p><p class=\&quot;mb-3 text-gray-500\&quot;>Block 5, 5th Floor, Harcourt Centre, Harcourt Road Dublin, Ireland</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Phone:</p><p class=\&quot;mb-3 text-grat-500\&quot;>6-146-389-574</p><p class=\&quot;mb-1 font-weight-bold\&quot;>Store Hours:</p><p class=\&quot;mb-0 text-grat-500\&quot;>10 am - 10 pm EST, 7 days a week</p></div>&quot;}]">
                                <iframe src={`${ifr}`} loading="lazy" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}
const StoreItem = (props) => {
    let { t } = useTranslate()
    let { name, address, phone, open_time, onClick, active } = props
    return (
        <div className={`card-body border-top poiter-store ${active ? 'active-bar' : ''}`} onClick={onClick} >
            {/* Heading */}
            <p className="font-weight-bold">
                {name}
            </p>
            <p className="text-gray-500">
                {address}
            </p>
            <p>
                <strong>{t('Phone')}:</strong> <br />
                <a className="text-gray-500" href="tel:6-146-389-574">{phone}</a>
            </p>
            <p className="mb-0">
                <strong>{t('Store Hours')}:</strong> <br />
                <span className="text-gray-500">{open_time}</span>
            </p>
        </div>
    )
}