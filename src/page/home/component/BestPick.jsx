import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useTranslate } from "../../../core/useTranslate"

export default function BestPick() {
    let { t } = useTranslate()
    let { categories } = useSelector(state => state.product)

    return (

        <section section section className="pt-12">
            {
                categories && categories ? (
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                                {/* Preheading */}
                                <h6 className="heading-xxs mb-3 text-gray-400">
                                    {t('New Collection')}
                                </h6>
                                {/* Heading */}
                                <h2 className="mb-4">{t('Best Picks')} 2021</h2>
                                {/* Subheading */}
                                <p className="mb-10 text-gray-500">
                                    {t("Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly brought Very green.")}
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
                                {/* Card */}
                                <div className="card mb-7 text-white" style={{ minHeight: '400px', backgroundImage: 'url(/img/products/product-ap.jpg)' }}>
                                    {/* Background */}
                                    <div className="card-bg">
                                        <div className="card-bg-img bg-cover" style={{ backgroundImage: 'url(/img/products/product-ap.jpg)' }} />
                                    </div>
                                    {/* Body */}
                                    <div className="card-body my-auto text-center">
                                        {/* Heading */}
                                        <h4 className="mb-0">{categories[2]?.title}</h4>
                                        {/* Link */}
                                        <Link className="btn btn-link stretched-link text-reset" to={`/shop?categories=${categories[2]?.id}`}>
                                            {t('Shop Now')} <i className="fe fe-arrow-right ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
                                {/* Card */}
                                <div className="card mb-7 text-body" style={{ minHeight: '400px' }}>
                                    {/* Background */}
                                    <div className="card-bg">
                                        <div className="card-bg-img bg-cover" style={{ backgroundImage: 'url(/img/products/product-lap.jpg)' }} />
                                    </div>
                                    {/* Body */}
                                    <div className="card-body my-auto px-md-10 text-center text-md-left">
                                        {/* Circle */}
                                        <div className="card-circle card-circle-lg card-circle-right">
                                            <strong>save</strong>
                                            <span className="font-size-h4 font-weight-bold">30%</span>
                                        </div>
                                        {/* Heading */}
                                        <h4 className="mb-0">{categories[3]?.title}</h4>
                                        {/* Link */}
                                        <Link className="btn btn-link stretched-link px-0 text-reset" to={`/shop?categories=${categories[3]?.id}`}>
                                            {t('Shop Now')} <i className="fe fe-arrow-right ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
                                {/* Card */}
                                <div className="card mb-7 mb-md-0 text-body" style={{ minHeight: '400px' }}>
                                    {/* Background */}
                                    <div className="card-bg">
                                        <div className="card-bg-img bg-cover" style={{ backgroundImage: 'url(/img/products/product-dt.jpg)' }} />
                                    </div>
                                    {/* Body */}
                                    <div className="card-body my-auto px-md-10 text-center text-md-left">
                                        {/* Heading */}
                                        <h4 className="mb-0">{categories[1]?.title}</h4>
                                        {/* Link */}
                                        <Link className="btn btn-link stretched-link px-0 text-reset" to={`/shop?categories=${categories[3]?.id}`}>
                                            {t('Shop Now')} <i className="fe fe-arrow-right ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
                                {/* Card */}
                                <div className="card text-white" style={{ minHeight: '400px' }}>
                                    {/* Background */}
                                    <div className="card-bg">
                                        <div className="card-bg-img bg-cover" style={{ backgroundImage: 'url(/img/products/product-cam.jpg)' }} />
                                    </div>
                                    {/* Body */}
                                    <div className="card-body my-auto text-center">
                                        {/* Heading */}
                                        <h4 className="mb-0">{categories[4]?.title}</h4>
                                        {/* Link */}
                                        <Link className="btn btn-link stretched-link text-reset" to={`/shop?categories=${categories[4]?.id}`}>
                                            {t('Shop Now')} <i className="fe fe-arrow-right ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    <div></div>
            }

        </section>
    )
}