import React from "react";
import "./ContactUs.css";
import bgImage from "../../assets/images/common/bg.mp4";

export default function ContactUsWidget() {
  return (
    <div class="container contact-form">
      <div>
        <video loop autoPlay muted id="bg-video">
          <source src={bgImage} />
        </video>
      </div>
      <div class="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>

      <form class="secondlayer" method="post">
        <div>
          <h3>Drop Us a Message</h3>
          <div class="row modifybg">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="txtName"
                  class="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  class="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  class="form-control"
                  placeholder="Your Phone Number *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Send Message"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="txtMsg"
                  class="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
