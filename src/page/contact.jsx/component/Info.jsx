import { Link } from "react-router-dom"
import { useTranslate } from "../../../core/useTranslate"

export default function Info() {
    let { t } = useTranslate()
    return (
        <div className="col-12 col-md-4 col-xl-3">
            <aside className="mb-9 mb-md-0">
                {/* Heading */}
                <h6 className="mb-6">
                    <i className="fe fe-phone text-primary mr-4" /> {t('Call to Us')}:
                </h6>
                {/* Text */}
                <p className="text-gray-500">
                    {t("We're available from 10 am - 10 pm EST,7 days a week.")}
                </p>
                <p>
                    <strong>{t('Customer Service')}:</strong><br />
                    <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
                </p>
                <p className="mb-0">
                    <strong>{t('Careers')}:</strong><br />
                    <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
                </p>
                {/* Divider */}
                <hr />
                {/* Heading */}
                <h6 className="mb-6">
                    <i className="fe fe-mail text-primary mr-4" /> {t('Write to Us')}:
                </h6>
                {/* Text */}
                <p className="text-gray-500">
                    {t(' Fill out our form and we will contact you within 24 hours.')}
                </p>

                <p>
                    <strong>{t('Customer Service')}:</strong><br />
                    <a className="text-gray-500" href="mailto:customer@example.com">customer@example.com</a>
                </p>
                <p className="mb-0">
                    <strong>{t('Careers')}:</strong><br />
                    <a className="text-gray-500" href="mailto:careers@example.com">careers@example.com</a>
                </p>
                {/* Divider */}
                <hr />
                {/* Heading */}
                <h6 className="mb-6">
                    <i className="fe fe-mail text-primary mr-4" /> {t('Find Us')}:
                </h6>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                    {t(' Want to visit our Offline Stores?')}
                </p>
                {/* Button */}
                <p className="mb-0">
                    <Link className="btn btn-link px-0 text-body" to={`/store-locator`}>
                        {t('Go to Store Locator')} <i className="fe fe-arrow-right ml-2" />
                    </Link>
                </p>
            </aside>
        </div>
    )
}