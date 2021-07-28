import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useTranslate } from "../../../core/useTranslate"
import yup from "../../../hook/yupPattern"
import { addDoc } from "../../../service/firebase/service"

export const CountDown = ({ d, h, m, s }) => {
    let { t } = useTranslate()
    let schema = yup.object().shape({
        email: yup.string().required('Cannot be left blank').email('Email not be valid '),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        addDoc('notify', { data })
    }
    return (
        <section className="bg-cover" style={{ marginTop: '-90px', backgroundImage: 'url(/img/covers/cover-22.jpg)' }}>
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center min-vh-100 pt-13 pb-12">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center text-white">
                        {/* Heading */}
                        <h1>{t("We are Coming Soon")}</h1>
                        {/* Text */}
                        <p className="mb-9 font-size-lg">
                            {t('Our team have been working on something amazing.')}
                        </p>
                        {/* Counter */}
                        <div className="d-flex justify-content-center mb-10">
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder" data-days>{d}</div>
                                <div className="heading-xxs">{t('Days')}</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder" data-hours>{h?.toString().padStart(2, 0)}</div>
                                <div className="heading-xxs">{t('Hours')}</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder" data-minutes>{m?.toString().padStart(2, 0)}</div>
                                <div className="heading-xxs">{t('Minutes')}</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder" data-seconds>{s?.toString().padStart(2, 0)}</div>
                                <div className="heading-xxs">{t('Seconds')}</div>
                            </div>
                        </div>
                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row">
                                <div className="col-12 col-md">
                                    {/* Input */}
                                    <div className="form-group mb-md-0">
                                        <label className="sr-only" htmlFor="comingSoonEmail" />
                                        <input {...register('email')} className="form-control form-control-dark" id="comingSoonEmail" type="email" placeholder="Enter Email *" />
                                    </div>
                                    {errors && <p className='error_text' style={{ color: '#fff' }}>{errors?.email?.message} </p>}
                                </div>
                                <div className="col-12 col-md-auto">
                                    {/* Button */}
                                    <button className="btn btn-dark" type="submit">
                                        {t("Notify me!")}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}