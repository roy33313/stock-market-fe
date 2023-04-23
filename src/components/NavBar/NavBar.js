import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../serverQueries/auth/auth";

export default function NavBar() {
  const [flag, setFlag] = useState();
  useEffect(() => {
    setFlag(isAuthenticated());
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            {!flag ? (
              <>
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
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/home">
                    Predictions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/news">
                    News
                  </Link>
                </li>
              </>
            )}
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
