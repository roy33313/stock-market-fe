import React from 'react'
import bgImage from "../../assets/images/common/bg.mp4"
export default function PredictionWidget() {
  return (
    <section className="vh-100">
    <div>
      <video loop autoPlay muted id="bg-video">
        <source src={bgImage} type="video/mp4"/>
      </video>
    </div>
    <div className="container" style={{width:"200vh",alignItems:"center"}}>
          <div className="card text-white" style={{backgroundColor : "#010c12", paddingBottom : "10%", position:"absolute",top:"20%",width: "60%", border:"2px solid white",alignItems:"center"}}>
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
                    <label htmlFor="location">Select Stock</label>
  <select id="location" name="comment">
    <option>ALKEM.NS</option>
    <option>AKZOINDIA.NS</option>
    <option>ALCHCORP.BO</option>
    <option>AMARAJABAT.NS</option>
    <option>AMBIKCO.NS</option>
  </select>
                    </div>
                    <div className="form-outline mb-4">
                    <label htmlFor="soil">Moving Average</label>
  <select id="soil" name="comment1">
    <option>10 days</option>
    <option>50 days</option>
    <option>100 days</option>
  </select>
                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button"

                      >
                        Predict
                      </button>
                    </div>
                  </form>
          </div>
    </div>
  </section>
  )
}
