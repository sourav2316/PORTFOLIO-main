import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_pgyvhq2", "template_s5t930b", form.current, {
        publicKey: "NEzd3JxJFKmf78mLv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact__section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">ksourav044@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 8544769803</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com/sourav2316"
              className="contact__social-link"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/ksourav2321"
              className="contact__social-link"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-kumar-31a282122"
              className="contact__social-link"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/s_prajapati_23/"
              className="contact__social-link"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="from_name"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="from_email"
              />
            </div>
            <div className="form__input-div">
              <input
                type="number"
                placeholder="Your  Age"
                className="form__control"
                name="from_age"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="message"
            ></textarea>
          </div>
          <button className="button">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
