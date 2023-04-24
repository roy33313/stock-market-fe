import React from "react";
import bgImage from "../../assets/images/common/bg.mp4";
import "./predictionWidget.css";
export default function PredictionWidget() {
  return (
    <div className="main_cont">
      <div>
        <video loop autoPlay muted id="bg-video">
          <source src={bgImage} type="video/mp4" />
        </video>
      </div>
      <div className="content_cont">
        <div className="second_cont">
          <div className="content">
            <div classname="d-flex align-items-center mb-3 pb-1">
              {/* <i lassName="fas fa-cubes fa-2x me-3"
        style= "color: #ff6219;"> */}
              <img
                className="logo"
                src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                alt="prrrr"
              />
            </div>
            <h1
              className="signIn fw-normal mb-3 pb-3"
              style={{ letterSpacing: 1 }}
            >
              <strong>LETS START PREDICTING</strong>
            </h1>
            <div classname="form-outline mb-4">
              <label className="labels" htmlfor="location">
                Select Stock
              </label>
              <select id="location" className="options" name="comment">
                <option>ALKEM.NS</option>
                <option>AKZOINDIA.NS</option>
                <option>ALCHCORP.BO</option>
                <option>AMARAJABAT.NS</option>
                <option>AMBIKCO.NS</option>
              </select>
            </div>
            <div classname="form-outline mb-4">
              <label className="labels" htmlfor="soil">
                Moving Average
              </label>
              <select id="soil" className="options" name="comment1">
                <option>10 days</option>
                <option>50 days</option>
                <option>100 days</option>
              </select>
            </div>
            <div classname="pt-1 mb-4">
              <button className="btn btn-dark btn-lg" type="button">
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}