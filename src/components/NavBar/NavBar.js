import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../serverQueries/auth/auth";

export default function NavBar() {
  const [flag, setFlag] = useState();
  useEffect(() => {
    setFlag(isAuthenticated());
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#010c12" }}
    >
      <div className="container-fluid">
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <Link className="nav-link mx-2" aria-current="page" to="/home">
                <p style={{ color: "#FFFFFF" }}>Home</p>
              </Link>
            </li>
            {!flag ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/login">
                    <p style={{ color: "#FFFFFF" }}>Login</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/register">
                    <p style={{ color: "#FFFFFF" }}>Register</p>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/profile">
                    <p style={{ color: "#FFFFFF" }}>Profile</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/prediction">
                    <p style={{ color: "#FFFFFF" }}>Predictions</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/news">
                    <p style={{ color: "#FFFFFF" }}>News</p>
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/aboutus">
                <p style={{ color: "#FFFFFF" }}>About us</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/contactus">
                <p style={{ color: "#FFFFFF" }}>Contact us</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
