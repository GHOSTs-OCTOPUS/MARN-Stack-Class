import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Logo" style={{ height: "50px", width: "50px" }} />
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/menu" className="nav-link">Menu</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/team" className="nav-link">Team</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link"> Contact</NavLink>
            </li>
           
          </ul>

          <button className="btn btn-pink ms-lg-3">
            BUY NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;