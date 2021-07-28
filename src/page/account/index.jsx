import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { useTranslate } from "../../core/useTranslate";
import { logoutAction } from "../../redux/action/authAction";
import { clearCart } from "../../redux/action/cartAction";
export default function Account({ children }) {
    let { t } = useTranslate()
    let { path } = useRouteMatch()
    let dispatch = useDispatch()
    let auth = useSelector(state => state.auth)
    if (!auth.login) return <Redirect to='/auth' />
    function LogoutHandle(e) {
        e.preventDefault()
        dispatch(logoutAction())
        dispatch(clearCart())
    }
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">{t('My Account')}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        {/* Nav */}
                        <nav className="mb-10 mb-md-0">
                            <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/orders`}>
                                    {t('Orders')}
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/wishlist`}>
                                    {t('Wishlist')}
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " exact to={`${path}`}>
                                    {t('Personal Info')}
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/address`}>
                                    {t('Address')}
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/payment`}>
                                    {t('Payment Methods')}
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle" onClick={LogoutHandle} to="/auth">
                                    {t('Logout')}
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                    {children}
                </div>
            </div>
        </section>
    )
}