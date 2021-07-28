import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useRouteMatch } from "react-router-dom"
import { useTranslate } from '../../../../core/useTranslate'
export default function MainNav() {
    let { t } = useTranslate()
    let cart = useSelector(state => state.cart)
    let { path } = useRouteMatch()
    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/">Shopper.</Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item ">
                                {/* Toggle */}
                                <NavLink className="nav-link" to="/shop">{t('All Product')}</NavLink>
                            </li>
                            {/* <li className="nav-item  position-static">
                                <NavLink className="nav-link"  to={`/shop?categories=1789`}>{t('Phone-Tablet')}</NavLink>

                            </li> */}
                            <li className="nav-item ">
                                {/* Toggle */}
                                <NavLink className="nav-link" to={`/about-us`}>{t('About')}</NavLink>
                                {/* Menu */}
                            </li>
                            <li className="nav-item ">
                                {/* Toggle */}
                                <NavLink className="nav-link" to={`/faq`}>{t('FAQ')}</NavLink>
                                {/* Menu */}
                            </li>
                            <li className="nav-item ">
                                {/* Toggle */}
                                <NavLink className="nav-link" to="/store-locator">{t('Store')}</NavLink>
                                {/* Menu */}
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us">{t('Contact')}</NavLink>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                    <i className="fe fe-search" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account">
                                    <i className="fe fe-user" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account/wishlist">
                                    <i className="fe fe-heart" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">

                                <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                    {
                                        cart?.num > 0 ? (<span data-cart-items={cart?.num}>
                                            <i className="fe fe-shopping-cart" />
                                        </span>)
                                            :
                                            (<span data-cart-items={0}>
                                                <i className="fe fe-shopping-cart" />
                                            </span>)
                                    }
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}