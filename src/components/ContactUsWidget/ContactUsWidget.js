import React, { useState } from "react";
import "./ContactUs.css";
import bgImage from "../../assets/images/common/bg.mp4";
import { sendMail } from "../../utils/sendMail";

export default function ContactUsWidget() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    sendMail(name, email, phoneNo, message);
  };

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

        <form class="secondlayer">
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
                    onChange={handleNameChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                    onChange={handleEmailChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    onChange={handlePhoneNoChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    class="btnContact"
                    value="Send Message"
                    onChange={handleMessageChange}
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
