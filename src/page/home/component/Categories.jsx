import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useTranslate } from "../../../core/useTranslate";

export default function Categories() {
    let { t } = useTranslate()
    let { categories } = useSelector(state => state.product)
    return (
        <section>
            {
                categories && categories ? (
                    <div className="row no-gutters d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">
                        {/* Item */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-1-dt.jpg)' }}>
                            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: '470px' }}>
                                <div className="card-body mt-auto mb-n11 py-8">
                                    {/* Heading */}

                                    <h1 className="mb-0 font-weight-bolder">
                                        {categories[0]?.title}
                                    </h1>
                                </div>
                                <div className="card-body mt-auto py-8">
                                    {/* Button */}

                                    <Link className="btn btn-white stretched-link" to={`/shop?categories=${categories[0]?.id}`}>
                                        {t('Shop Now')} <i className="fe fe-arrow-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-2-book.jpg)' }}>
                            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: '470px' }}>
                                <div className="card-body mt-auto mb-n11 py-8">
                                    {/* Heading */}
                                    <h1 className="mb-0 font-weight-bolder">
                                        {categories[13]?.title}
                                    </h1>
                                </div>
                                <div className="card-body mt-auto py-8">
                                    {/* Button */}
                                    <Link className="btn btn-white stretched-link" to={`/shop?categories=${categories[13]?.id}`}>
                                        {t('Shop Now')} <i className="fe fe-arrow-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-3-tt.jpg)' }}>
                            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: '470px' }}>
                                <div className="card-body mt-auto mb-n11 py-8">
                                    {/* Heading */}
                                    <h1 className="mb-0 font-weight-bolder">
                                        {categories[10]?.title}

                                    </h1>
                                </div>
                                <div className="card-body mt-auto py-8">
                                    {/* Button */}
                                    <Link className="btn btn-white stretched-link" to={`/shop?categories=${categories[10]?.id}`}>
                                        {t('Shop Now')} <i className="fe fe-arrow-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                    : <div></div>
            }

        </section>

    )
}