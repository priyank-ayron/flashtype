import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="col-sm ">Contact Priyank Agarwal at:</h3>
            <div className="contact_details">
              <p className="each_detail">
                <a
                  href="https://www.linkedin.com/in/priyank-agarwal-iiita/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="Click to open LinkedIn"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
              </p>
              <p className="each_detail">
                <a
                  href="https://github.com/priyank-ayron/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="Click to open Github"
                >
                  <FaGithub></FaGithub>
                </a>
              </p>
              <p className="each_detail">
                <a
                  href="https://www.facebook.com/priyank.agarwal.731/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="Click to open facebook"
                >
                  <FaFacebook></FaFacebook>
                </a>
              </p>
              <li className="display_contact">
                <a
                  href="tel:+91-6386947948"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="+91-6386947948"
                >
                  <FaPhoneAlt></FaPhoneAlt>
                </a>
              </li>
              <li className="display_contact">
                <a
                  href="mailto:priyank.ayron@gmail.com"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="priyank.ayron@gmail.com"
                >
                  <FaEnvelope></FaEnvelope>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
