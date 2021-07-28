import { useEffect, useState } from "react";
import { useTranslate } from "../../core/useTranslate";
import PageApi from "../../service/pageApi";
import { FAQItem } from "./component/FAQItem";

export default function FAQ() {
    let { t } = useTranslate()
    let [faqItem, setFaqItem] = useState({
        data: []
    })
    useEffect(() => {
        PageApi.FaqApi()
            .then(res => {
                setFaqItem(res)
            })
    })
    return (
        <>
            {/* CONTENT */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">{t('Frequently Asked Questionss')}</h3>
                            {/* Heading */}
                            <FAQItem {...faqItem.data} />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}