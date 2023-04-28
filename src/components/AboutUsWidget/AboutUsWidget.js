import React from "react";
import bgImage from "../../assets/images/common/bg.mp4";
import "./AboutUsWidget.css";
export default function AboutUsWidget() {
  return (
    <div>
      <div>
        <video loop autoPlay muted id="bg-video">
          <source src={bgImage} type="video/mp4" />
        </video>
      </div>
      <div className="about-us">
        <div className="about">
          <img
            src="https://wallpapercave.com/wp/wp10468954.jpg"
            className="pic"
            alt="fallback"
          />
          <div className="text">
            <h2>About Us</h2>
            <h5>
              Software <span>Engineers</span>
            </h5>
            <p>
              "We are a group of four individuals who are pursuing our education
              in the field of software engineering. We have come together to
              work on various software development projects and assignments as a
              team. Each member brings their unique skills and expertise to the
              table, which helps the group work efficiently and produce
              high-quality results. Additionally, we have a solid foundation in
              programming languages, software design, and development
              methodologies."
            </p>
            <div className="data">
              <a href="/" className="hire">
                Go Back To Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
