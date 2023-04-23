import React from "react";
import "./ContactUs.css";
import bgImage from "../../assets/images/common/bg.mp4";
import { sendEmail } from "../../utils/sendMail";

export default function ContactUsWidget() {
  return (
    <div>
      <div>
        <video loop autoPlay muted id="bg-video">
          <source src={bgImage} />
        </video>
      </div>
      <div class="container contact-form">
        <div class="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>

        <form class="secondlayer" onSubmit={sendEmail}>
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
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
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
    </div>
  );
}
