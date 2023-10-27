import "./navbar.css";
import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <nav id="Navbar">
            <div className="navbar flex flex-row py-2  justify-between  px-4">
                <div className="logo flex flex-row items-center gap-2">
                    <p className="text-4xl">TECHNOVANZA</p>
                </div>
                <div className="nav-items flex flex-row items-center gap-8 text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/gls">GLS</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>

        </nav>

    );
}

export default Navbar;
