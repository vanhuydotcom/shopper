import { useTranslate } from '../../../core/useTranslate'
export default function OurStory() {
    let { t } = useTranslate()
    return (
        <>
            {/* OUR STORY */}
            <section className="py-12">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-md-6">
                            {/* Image */}
                            <img src="/img/products/product-62.jpg" alt="..." className="img-fluid w-50" />
                            {/* Image */}
                            <div className="text-right mt-n13 mt-lg-n15 mb-10 mb-md-0">
                                <img src="/img/products/product-63.jpg" alt="..." className="img-fluid w-75" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            {/* Preheading */}
                            <h6 className="heading-xxs mb-3 text-gray-400">
                                {t('Our story')}
                            </h6>
                            {/* Heading */}
                            <h2 className="mb-7">{t('About our Store')}</h2>
                            {/* Text */}
                            <p className="font-size-lg text-muted">
                                {t(' Open created shall two he second moving whose. He face whose two upon, fowl behold waters.Fly there their day creepeth.Darkness beginning spirit after.Creepeth subdue. Brought may, first.Under living that.')}
                            </p>
                            <p className="mb-0 font-size-lg text-muted">
                                {t("Third. For morning whales saw were had seed can't divide it light shall moveth, us blessed given wherein.")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}