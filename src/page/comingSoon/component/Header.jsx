import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark @@classList">
            <div className="container">
                {/* Brand */}
                <Link className="navbar-brand" to="/">
                    Shopper.
                </Link>
                {/* Nav */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#!">
                            <i className="fab fa-facebook-f" />
                        </a>
                    </li>
                    <li className="nav-item ml-n4">
                        <a className="nav-link" href="#!">
                            <i className="fab fa-twitter" />
                        </a>
                    </li>
                    <li className="nav-item ml-n4">
                        <a className="nav-link" href="#!">
                            <i className="fab fa-instagram" />
                        </a>
                    </li>
                    <li className="nav-item ml-n4">
                        <a className="nav-link" href="#!">
                            <i className="fab fa-medium" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}