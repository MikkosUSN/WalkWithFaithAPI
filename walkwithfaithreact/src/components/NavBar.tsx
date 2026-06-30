import { Link } from "react-router-dom";

const NavBar = () =>
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    Walk with Faith &amp; Grace
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/bible-verses">
                                Bible Verses
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/saved-verses">
                                Saved Verses
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/devotions">
                                Devotions
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/notes">
                                Notes
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;