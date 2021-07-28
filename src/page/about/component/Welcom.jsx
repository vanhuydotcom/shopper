import { useTranslate } from '../../../core/useTranslate'
export default function Welcome() {
    let { t } = useTranslate()
    return (
        <>
            {/* WELCOME */}
            <section>
                <div className="container">
                    <div className="row justify-content-center py-14 bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-21.jpg)' }}>
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            {/* Heading */}
                            <h1 className="mb-0 text-center text-white">
                                {t('We believe we can all make a stylish.')}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}