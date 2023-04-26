import React from "react";
import { useNavigate } from "react-router-dom";
import "./profileWidget.css";
import Cookies from "universal-cookie";
export default function ProfileWidget(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("details");
    navigate("/login");
  };
  return (
    <>
      <div style={{ height: "50%" }}>
        {" "}
        <section style={{ backgroundColor: "#010c12", color: "white" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">First Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text mb-0">{props.details.firstName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Last Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text mb-0">{props.details.lastName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text mb-0">{props.details.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text mb-0">{props.details.phoneNo}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <div
          class="lastCont"
          style={{ backgroundColor: "#02202B", height: "30vh" }}
        >
          <button onClick={handleLogout} type="button" class="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
