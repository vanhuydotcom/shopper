
import React from "react";
import { useTranslate } from "../../core/useTranslate";
import { FormContact } from "./component/FormContact";
import Info from "./component/Info";

export default function Contact() {
    let { t } = useTranslate()
    return (
        <>
            {/* CONTENT */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">{t('Contact Us')}</h3>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <Info />
                        <FormContact />
                    </div>
                </div>
            </section>
        </>
    )
}