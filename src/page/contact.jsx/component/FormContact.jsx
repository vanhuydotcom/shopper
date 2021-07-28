import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslate } from "../../../core/useTranslate"
import yup from "../../../hook/yupPattern"
import { addDoc } from "../../../service/firebase/service"

export const FormContact = () => {
    let { t } = useTranslate()
    const schema = yup.object().shape({
        name: yup.string().required('Cannot be left blank').name("Names can't have numbers"),
        email: yup.string().required('Cannot be left blank').email('Email not be valid '),
        title: yup.string().required('Cannot be left blank'),
        content: yup.string().required('Cannot be left blank').min(10),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    let [success, setSuccess] = useState(null)
    const onSubmit = (data) => {
        addDoc('contact', { data })
        setSuccess(`Thanks ${data?.name}, We will contact you within 24 hours.`)
    }
    const _reset = () => {
        document.querySelector('#form-contact').reset()
    }
    return (
        <div className="col-12 col-md-8">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} id='form-contact'>
                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactName">
                        {t('Your Name')} *
                    </label>
                    <input {...register('name')} className="form-control form-control-sm" id="contactName" type="text" placeholder="Your Name *" />
                </div>
                {errors?.name && <p className='error_text'>{errors?.name?.message}</p>}
                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactEmail">
                        {t('Your Email')} *
                    </label>
                    <input  {...register('email')} className="form-control form-control-sm" id="contactEmail" type="email" placeholder="Your Email *" />
                </div>
                {errors?.email && <p className='error_text'>{errors?.email?.message}</p>}

                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactTitle">
                        {t('Title')} *
                    </label>
                    <input  {...register('title')} className="form-control form-control-sm" id="contactTitle" type="text" placeholder="Title *" />
                </div>
                {errors?.title && <p className='error_text'>{errors?.title?.message}</p>}

                {/* Email */}
                <div className="form-group mb-7">
                    <label className="sr-only" htmlFor="contactMessage">
                        {t('Message')} *
                    </label>
                    <textarea {...register('content')} className="form-control form-control-sm" id="contactMessage" rows={5} placeholder="Message *" />
                </div>
                {errors?.content && <p className='error_text'>{errors?.content?.message}</p>}

                {/* Button */}
                <button className="btn btn-dark" onClick={_reset}>
                    {t('Send Message')}
                </button>
            </form>
            {success && <p className='error_text' style={{ color: '#fd7e14' }}>{success}</p>}

        </div>
    )
}