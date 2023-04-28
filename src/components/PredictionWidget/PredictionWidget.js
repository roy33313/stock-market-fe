import React, { useState } from "react";
import bgImage from "../../assets/images/common/bg.mp4";
import "./predictionWidget.css";
import prediction from "../../serverQueries/prediction/predictedValue";
import logo from "../../assets/images/common/Logo.png";

import ClipLoader from "react-spinners/ClipLoader";
import { stockNames } from "./stockNames";
export default function PredictionWidget() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "20%",
  };

  const [stock, setStock] = useState("20MICRONS.BO");
  const [predictedValue, setPredictedVaue] = useState(0);
  const [chartImg, setChartImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  const handleStock = (event) => {
    setStock(event.target.value);
  };

  const handlePredict = async () => {
    setLoading(true);
    await prediction(stock, setChartImg, setPredictedVaue);
    setLoading(false);
    setVisibility("visible");
  };

  return (
    <div className="main_cont">
      {loading ? (
        <ClipLoader
          color={"#456191"}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <div>
            <video loop autoPlay muted id="bg-video">
              <source src={bgImage} type="video/mp4" />
            </video>
          </div>
          <div className="content_cont">
            <div className="second_cont">
              <div className="content">
                <div className="d-flex align-items-center mb-3 pb-1">
                  <img
                    src={logo}
                    alt="login form"
                    className="img-fluid"
                    style={{
                      display: "inlineBlock",
                      height: "200px",
                      marginTop: "-15px",
                    }}
                  />
                </div>
                <h1
                  className="signIn fw-normal mb-3 pb-3"
                  style={{ letterSpacing: 1 }}
                >
                  <strong>LETS START PREDICTING</strong>
                </h1>
                <div className="form-outline mb-4">
                  <label className="labels" htmlFor="location">
                    Select Stock
                  </label>
                  <select
                    id="location"
                    className="options"
                    name="comment"
                    onClick={handleStock}
                  >
                    {stockNames.map((data) => {
                      return <option key={data}>{data}</option>;
                    })}
                  </select>
                </div>
                <div className="form-outline mb-4">
                  <label className="labels" htmlFor="soil">
                    Predicted Value
                  </label>
                  <p
                    style={{
                      color: "#fff",
                      position: "relative",
                      left: "60%",
                      marginTop: "-9%",
                      marginBottom: "15%",
                    }}
                  >
                    {predictedValue}
                  </p>
                </div>
                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-dark btn-lg"
                    type="button"
                    onClick={handlePredict}
                  >
                    Predict
                  </button>
                </div>
                <div style={{ height: "20%", width: "10%" }}>
                  <img
                    src={chartImg}
                    alt="chart"
                    style={{
                      visibility: visibility,
                      height: "1200%",
                      width: "1900%",
                      position: "relative",
                      right: "2000%",
                      bottom: "1000%",
                      border: "2px solid blue",
                      borderRadius: "10%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
