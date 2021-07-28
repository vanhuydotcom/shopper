import { useTranslate } from '../../../core/useTranslate'
export default function AboutUs() {
    let { t } = useTranslate()
    return (
        <>
            {/* ABOUT */}
            <section className="py-12 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h2 className="mb-10">{t('Fashion Democracy')}</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-9 font-size-lg text-gray-500">
                        <div className="col-12 col-md-5">
                            <p>{t('And whales be, earth thing seed whales, forth beginning made may beginning sea great void likeness open beast firmament very living cattle divided fruitful may. Sea created saw fifth so thing signs meat.')} </p>
                            <p className="mb-md-0">
                                {t("Green fruit meat stars, creepeth second he meat. Appear is fruitful given Winged.Gathered second so us saying blessed, he.")}
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 font-size-lg text-gray-500">
                            <p>
                                {t(" Male was. Itself. Have isn't first divide and i day, moving she'd appear open dominion sea him days multiply our, make firmament rule there made set midst creeping let won't morning their great fish.")}
                            </p>
                            <p className="mb-0">
                                {t("Unto over unto together first shall greater yielding made dominion fill. First waters bring made blessed likeness bring forth had. Creature one.")}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Button */}
                            <a className="btn btn-dark" href="shop.html">
                                {t('Shop Now')} <i className="fe fe-arrow-right ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}