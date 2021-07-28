import { useTranslate } from '../../core/useTranslate'

export const PasswordReset = () => {
    let { t } = useTranslate()

    return (
        <>
            {/* Password Reset */}
            <div className="modal fade" id="modalPasswordReset" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">{t('Forgot Password?')}</strong>
                        </div>
                        {/* Body */}
                        <div className="modal-body text-center">
                            {/* Text */}
                            <p className="mb-7 font-size-sm text-gray-500">
                                {t('Please enter your Email Address. You will receive a link to create a new password via Email.')}
                            </p>
                            {/* Form */}
                            <form>
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="modalPasswordResetEmail">
                                        {t('Email Address *')}
                                    </label>
                                    <input className="form-control form-control-sm" id="modalPasswordResetEmail" type="email" placeholder="Email Address *" required />
                                </div>
                                {/* Button */}
                                <button className="btn btn-sm btn-dark">
                                    {t(' Reset Password')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}