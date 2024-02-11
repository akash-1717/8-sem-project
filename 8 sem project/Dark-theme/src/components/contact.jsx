import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        style={{borderRadius: '0.5rem'}}
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        style={{borderRadius: '0.5rem'}}
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    style={{borderRadius: '0.5rem', resize: 'none'}}
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <a target="_blank" className="greyhover" href="https://maps.app.goo.gl/NVZWayQ7sHtuK71B6">{props.data ? props.data.address : "loading"}</a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                <a className="greyhover" href={props.data ? `tel:${props.data.ph1}` : "#"}>{props.data ? props.data.phone1 : "loading"}</a><br />
                <a className="greyhover" href={props.data ? `tel:${props.data.ph2}` : "#"}>{props.data ? props.data.phone2 : "loading"}</a><br />
                <a className="greyhover" href={props.data ? `tel:${props.data.ph3}` : "#"}>{props.data ? props.data.phone3 : "loading"}</a><br />
                <a className="greyhover" href={props.data ? `tel:${props.data.ph4}` : "#"}>{props.data ? props.data.phone4 : "loading"}</a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a className="greyhover" href={props.data ? `mailto:${props.data.email1}` : "#"}>{props.data ? props.data.email1 : "loading"}</a><br />
                <a className="greyhover" href={props.data ? `mailto:${props.data.email2}` : "#"}>{props.data ? props.data.email2 : "loading"}</a><br />
                <a className="greyhover" href={props.data ? `mailto:${props.data.email3}` : "#"}>{props.data ? props.data.email3 : "loading"}</a><br />
                <a className="greyhover" href={props.data ? `mailto:${props.data.email4}` : "#"}>{props.data ? props.data.email4 : "loading"}</a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.pinterest : "/"}>
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" style={{backgroundColor: 'black', color: 'white'}}>
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Paintora, Inc. Made with 💜 by{" "}
            <a href="https://github.com/Abhisheknayak720/8th-sem-project" rel="nofollow">
              Team 7
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
