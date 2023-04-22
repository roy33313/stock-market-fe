import React, { useState } from "react";
import { inputValidation } from "../../utils/registerUtils";

export default function RegisterWidget() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = () => {
    if (inputValidation()) {
      //database kaam
    } else {
      alert("invalid credentials");
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <section className="h-100 ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    className="img-fluid"
                    alt="register"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Student registration form
                    </h3>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            onChange={handleFirstNameChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m"
                          >
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1n"
                            className="form-control form-control-lg"
                            onChange={handleLastNameChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n"
                          >
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m1"
                            className="form-control form-control-lg"
                            onChange={handleEmailChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m1"
                          >
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1n1"
                            className="form-control form-control-lg"
                            onChange={handlePhoneNoChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n1"
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example8"
                        className="form-control form-control-lg"
                        onChange={handlePasswordChange}
                      />
                      <label className="form-label" htmlFor="form3Example8">
                        Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example8"
                        className="form-control form-control-lg"
                        onChange={handleConfirmPasswordChange}
                      />
                      <label className="form-label" htmlFor="form3Example8">
                        Confirm Password
                      </label>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-end pt-3"
                    style={{
                      position: "relative",
                      right: "40%",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block"
                      onClick={handleRegistration}
                    >
                      Submit form
                    </button>
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
