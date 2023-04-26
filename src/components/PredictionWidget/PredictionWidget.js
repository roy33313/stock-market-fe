import React from "react";
import bgImage from "../../assets/images/common/bg.mp4";
import "./predictionWidget.css";
export default function PredictionWidget() {
  const stocks = [
    "20MICRONS.BO",
    "3IINFOTECH.BO",
    "3IINFOTECH.NS",
    "3MINDIA.BO",
    "3MINDIA.NS",
    "3PLAND.NS",
    "5PAISA.NS",
    "AGROPHOS.NS",
    "AHLEAST.BO",
    "AHLEAST.NS",
    "AHLUCONT.BO",
    "AHLUCONT.NS",
    "AHLWEST.BO",
    "AHLWEST.NS",
    "AHMDSTE.BO",
    "AIAENG.BO",
    "AIFL.BO",
    "AIFL.NS",
    "AIIL.BO",
    "AIMCOPEST.BO",
    "AINFRA.BO",
    "AIONJSW.NS",
    "AIRAN.NS",
    "AISHWARYA.BO",
    "AJANTPHARM.BO",
    "AJANTPHARM.NS",
    "AJANTSOY.BO",
    "AJCON.BO",
    "AJEL.BO",
    "AJIL.BO",
    "AJMERA.BO",
    "AJMERA.NS",
    "AJWAFUN.BO",
    "AKASH.NS",
    "AKASHDEEP.BO",
    "AKCAPIT.BO",
    "AKM.BO",
    "AKSCHEM.BO",
    "AKSHOPTFBR.BO",
    "AKSHOPTFBR.NS",
    "AKSPINTEX.BO",
    "AKZOINDIA.NS",
    "ALANKIT.BO",
    "ALANKIT.NS",
    "ALANSCOTT.BO",
    "ALBERTDA.BO",
    "ALBERTDAVD.NS",
    "ALBK.BO",
    "ALBK.NS",
    "ALCHCORP.BO",
    "ALCHEM.NS",
    "ALEMBICLTD.BO",
    "ALEMBICLTD.NS",
    "ALEXANDER.BO",
    "ALFAICA.BO",
    "ALFATRAN.BO",
    "ALFAVIO.BO",
    "ALFL.BO",
    "ALICON.BO",
    "ALICON.NS",
    "ALKA.BO",
    "ALKALI.BO",
    "ALKALI.NS",
    "ALKASEC.BO",
    "ALKEM.BO",
    "ALKEM.NS",
    "ALKYLAMINE.BO",
    "ALKYLAMINE.NS",
    "ALLCARGO.NS",
    "ALLSEC.BO",
    "ALLSEC.NS",
    "ALMONDZ.BO",
    "ALMONDZ.NS",
    "ALOKINDS.NS",
    "ALOKTEXT.BO",
    "ALPA.BO",
    "ALPA.NS",
    "ALPHAGEO.BO",
    "ALPHAGEO.NS",
    "ALPINEHOU.BO",
    "ALPSINDUS.NS",
    "ALPSMOTOR.BO",
    "ALSL.BO",
    "ALUFLUOR.BO",
    "AMAL.BO",
    "AMALGAM.BO",
    "AMANITRA.BO",
    "AMARAJABAT.BO",
    "AMARAJABAT.NS",
    "AMARDEE.BO",
    "AMARJOTHI.BO",
    "AMARSEC.BO",
    "AMAZEENT.BO",
    "AMBALALSA.BO",
    "AMBIKCO.BO",
    "AMBIKCO.NS",
    "AMBITION.BO",
    "ANANTRAJ.NS",
    "ANARINDUS.BO",
    "ANDHRABANK.BO",
    "ANDHRABANK.NS",
    "ANDHRACEMT.BO",
    "ANDHRACEMT.NS",
    "ANDHRAPAP.NS",
    "ANDHRAPET.BO",
    "ANDHRSUGAR.BO",
    "ANDHRSUGAR.NS",
    "ANDREWYU.BO",
    "ANERI.BO",
  ];
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
                {stocks.map((data) => {
                  return <option>{data}</option>;
                })}
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
