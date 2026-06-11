import { Link } from "react-router-dom";

function NavBar()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">

            <div className="container">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Walk with Faith & Grace
                </Link>

                <div className="navbar-nav">

                    <Link
                        className="nav-link"
                        to="/"
                    >
                        Bible Verses
                    </Link>

                    <Link
                        className="nav-link"
                        to="/saved-verses"
                    >
                        Saved Verses
                    </Link>

                    <Link
                        className="nav-link"
                        to="/devotions"
                    >
                        Devotions
                    </Link>

                    <Link
                        className="nav-link"
                        to="/notes"
                    >
                        Notes
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default NavBar;