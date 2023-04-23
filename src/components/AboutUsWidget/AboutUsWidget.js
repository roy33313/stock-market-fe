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
      <section className="about-us">
        <div className="about">
          <img
            src="https://news.maxabout.com/wp-content/uploads/2017/02/kawasaki-ninja-h2r-5.jpg"
            className="pic"
            alt="fallback"
          />
          <div className="text">
            <h2>About Us</h2>
            <h5>
              Front-end Developer &amp; <span>Designer</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              natus ad sed harum itaque ullam enim quas, veniam accusantium,
              quia animi id eos adipisci iusto molestias asperiores explicabo
              cum vero atque amet corporis! Soluta illum facere consequuntur
              magni. Ullam dolorem repudiandae cumque voluptate consequatur
              consectetur, eos provident necessitatibus reiciendis corrupti!
            </p>
            <div className="data">
              <a href="/" className="hire">
                Go Back To Home Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
