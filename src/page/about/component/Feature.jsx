import { useTranslate } from '../../../core/useTranslate'
export default function Feature() {
    let { t } = useTranslate()
    return (
        <>
            {/* FEATURES */}
            <section className="py-9">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-lg-0">
                                {/* Icon */}
                                <i className="fe fe-truck font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="heading-xxs mb-1">
                                        {t(' Free shipping')}
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        {t('  From all orders over $100')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-lg-0">
                                {/* Icon */}
                                <i className="fe fe-repeat font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        {t(' Free returns')}
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        {t('Return money within 30 days')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-md-0">
                                {/* Icon */}
                                <i className="fe fe-lock font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        {t(' Secure shopping')}
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        {t(" You're in safe hands")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex">
                                {/* Icon */}
                                <i className="fe fe-tag font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        {t(' Over 10,000 Styles')}
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        {t(' We have everything you need')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}