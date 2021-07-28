import { useTranslate } from '../../../core/useTranslate'
export default function Slogan() {
    let { t } = useTranslate()
    return (
        <>
            {/* SLOGAN */}
            <section>
                <div className="container">
                    <div className="row justify-content-center py-12 bg-primary bg-pattern">
                        <div className="col-12 col-lg-10 col-xl-8">
                            {/* Text */}
                            <p className="font-size-h5 line-height-base text-center text-white">
                                {t("Together won't divided fourth let grass above forth. Creature midst let cattle place tree. Gathered whose land form fruitful under bring creeping in upon void man unto divided itself gathered.")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}