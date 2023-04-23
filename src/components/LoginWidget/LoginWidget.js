import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { login } from "../../serverQueries/login/login";
import { isAuthenticated } from "../../serverQueries/auth/auth";
import loginImage from "../../assets/images/login/Login Image.jpg";
import bgImage from "../../assets/images/common/bg.mp4";
import "./LoginWidget.css";

export default function LoginWidget() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login({ email: email, password: password });
    if (isAuthenticated()) {
      navigate("/home");
    } else {
      window.alert("Invalid credentials");
    }
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  return (
    <section className="vh-100" style={{ backgroundImage: `url(${bgImage})` }}>
      <div>
        <video loop autoPlay muted id="bg-video">
          <source src={bgImage} type="video/mp4" />
        </video>
      </div>
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ left: "15%" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={loginImage}
                    alt="login form"
                    className="img-fluid"
                    // style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-7 d-flex align-items-center"
                  style={{ backgroundColor: "#010c12" }}
                >
                  <div className="card-body p-4 p-lg-5 text-white">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={handleEmailInput}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={handlePasswordInput}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
