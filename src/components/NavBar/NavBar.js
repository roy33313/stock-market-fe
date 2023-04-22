import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <Link
                className="nav-link mx-2 active"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/aboutus">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/contactus">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
