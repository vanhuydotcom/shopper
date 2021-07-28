import { useState } from "react";
import { useTranslate } from "../../../core/useTranslate";

export function Description({ des, spec }) {
    let { t } = useTranslate()
    let [showLess, setShowLess] = useState(true);
    return (
        <>
            <section className="pt-11">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Nav */}
                            <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                                <a className="nav-link active" data-toggle="tab" href="#descriptionTab">
                                    {t('Description')}
                                </a>
                                <a className="nav-link" data-toggle="tab" href="#sizeTab">
                                    {t('General Information')}
                                </a>

                            </div>
                            {/* Content */}
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="descriptionTab">
                                    <div className="row justify-content-center py-9">
                                        <div className="col-12 col-lg-10 col-xl-8">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* Text */}
                                                    <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: showLess ? `${des.slice(0, 500)} ` + `<p>.....</p>` : des }}>
                                                    </p>
                                                    <a className='btn btn-sm btn-dark btn-showtext ' onClick={() => setShowLess(!showLess)} >
                                                        {showLess ? 'Read More' : 'Read Less'}
                                                    </a>
                                                </div>
                                                {/* <div className="col-12 col-md-6">
                                                    {
                                                        product?.specifications?.map((e, i) => (
                                                            <ul key={i} className="list list-unstyled mb-md-0 text-gray-500">
                                                                {
                                                                    e.attributes.map((e1, i1) => (

                                                                        <li >
                                                                            <strong className="text-body" key={i1}>{e1.name}</strong> :  {e1.value}
                                                                        </li>

                                                                    ))
                                                                }
                                                            </ul>
                                                        ))
                                                    }
                                                </div> */}
                                                {/* <div className="col-12 col-md-6">
                                                <ul className="list list-unstyled mb-0">
                                                    <li>
                                                        <strong>Outer</strong>: Leather 100%, Polyamide 100%
                                                    </li>
                                                    <li>
                                                        <strong>Lining</strong>: Polyester 100%
                                                    </li>
                                                    <li>
                                                        <strong>CounSoletry</strong>: Rubber 100%
                                                    </li>
                                                </ul>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sizeTab">
                                    <div className="row justify-content-center py-9">
                                        <div className="col-12 col-lg-10 col-xl-8">
                                            <div className="row">
                                                <div className="col-12 col-md-12">
                                                    {
                                                        spec?.map((e, i) => (
                                                            <>
                                                                <p className="mb-4" style={{ paddingTop: '10px', color: '#ff6f61' }}>
                                                                    <strong>{e.name}:   </strong>
                                                                </p>
                                                                <ul key={i} className="list list-unstyled mb-md-0 text-gray-500">
                                                                    {
                                                                        e.attributes.map((e1, i1) => (

                                                                            <li >
                                                                                <strong className="text-body" key={i1}>{e1.name}</strong> :  {e1.value}
                                                                            </li>

                                                                        ))
                                                                    }
                                                                </ul>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                                {/* <div className="col-12 col-md-6">
                                                    <p className="mb-4">
                                                        <strong>Fitting information:</strong>
                                                    </p>
                                                    <ul className="mb-md-0 text-gray-500">
                                                        <li>
                                                            Upon seas hath every years have whose
                                                            subdue creeping they're it were.
                                                        </li>
                                                        <li>
                                                            Make great day bearing.
                                                        </li>
                                                        <li>
                                                            For the moveth is days don't said days.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <p className="mb-4">
                                                        <strong>Model measurements:</strong>
                                                    </p>
                                                    <ul className="list-unstyled text-gray-500">
                                                        <li>Height: 1.80 m</li>
                                                        <li>Bust/Chest: 89 cm</li>
                                                        <li>Hips: 91 cm</li>
                                                        <li>Waist: 65 cm</li>
                                                        <li>Model size: M</li>
                                                    </ul>
                                                    <p className="mb-0">
                                                        <img src="/img/icons/icon-ruler.svg" alt="..." className="img-fluid" />
                                                        <a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size chart</a>
                                                    </p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="tab-pane fade" id="shippingTab">
                                    <div className="row justify-content-center py-9">
                                        <div className="col-12 col-lg-10 col-xl-8">
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-sm table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Shipping Options</th>
                                                            <th>Delivery Time</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Standard Shipping</td>
                                                            <td>Delivery in 5 - 7 working days</td>
                                                            <td>$8.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Express Shipping</td>
                                                            <td>Delivery in 3 - 5 working days</td>
                                                            <td>$12.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1 - 2 day Shipping</td>
                                                            <td>Delivery in 1 - 2 working days</td>
                                                            <td>$12.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Free Shipping</td>
                                                            <td>
                                                                Living won't the He one every subdue meat replenish
                                                                face was you morning firmament darkness.
                                                            </td>
                                                            <td>$0.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p className="mb-0 text-gray-500">
                                                May, life blessed night so creature likeness their, for. <a className="text-body text-decoration-underline" href="#!">Find out more</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}