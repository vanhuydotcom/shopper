import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
let $ = window.$;
export default function Slider() {
    let ref = useRef();

    useEffect(() => {
        let div = $(ref.current);
        div.flickity({
            pageDot: true,
        });

    }, []);
    return (
        <div ref={ref} className="flickity-page-dots-inner mb-9 flickity-enabled is-draggable" data-flickity="{&quot;pageDots&quot;: true}" tabIndex={0}>
            <div className="w-100 " style={{ position: 'absolute', left: '300%' }}>
                {/* <div className="card bg-h-100 bg-left" style={{ backgroundImage: 'url(/img/covers/cover-24.png)' }}> */}
                <div className="card bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-24.png)' }}>

                    <div className="row" style={{ minHeight: '400px' }}>
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                            <div className="card-body px-md-10 py-11">
                                {/* Heading */}
                                <h4>
                                    Google Pixel 6
                                </h4>
                                {/* Button */}
                                <a className="btn btn-link px-0 text-body" href="shop.html">

                                    coming soon<i className="fe fe-arrow-right ml-2" />
                                </a>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-16.jpg)' }} /> */}
                    </div>
                </div>
            </div>
            <div className="w-100" aria-hidden="true" style={{ position: 'absolute', left: '100%' }}>
                <div className="card bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-30.jpg)' }}>
                    <div className="row align-items-center" style={{ minHeight: '400px' }}>
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                            <div className="card-body px-md-10 py-11">
                                {/* Heading */}
                                <h4 className="mb-5">Get -50% </h4>
                                {/* Text */}
                                {/* <p className="mb-7">
                                    Appear, dry there darkness they're seas. <br />
                                    <strong className="text-primary">Use code 4GF5SD</strong>
                                </p> */}
                                {/* Button */}
                                <a className="btn btn-outline-dark" href="shop.html">
                                    Shop Now <i className="fe fe-arrow-right ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="w-100" aria-hidden="true" style={{ position: 'absolute', left: '200%' }}>
                <div className="card bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-29.jpg)' }}>
                    <div className="row align-items-center" style={{ minHeight: '400px' }}>
                        <div className="col-12">
                            <div className="card-body px-md-10 py-11 text-center text-white">
                                {/* Preheading */}
                                <p className="text-uppercase">Enjoy an extra</p>
                                {/* Heading */}
                                <h1 className="display-4 text-uppercase">50% off</h1>
                                {/* Link */}
                                <Link className="link-underline text-reset" to="/shop">Shop Collection</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ol className="flickity-page-dots">
                <li className="dot is-selected" aria-label="Page dot 1" aria-current="step" />
                <li className="dot" aria-label="Page dot 2" />
                <li className="dot" aria-label="Page dot 3" />
            </ol> */}
        </div>
    )
}