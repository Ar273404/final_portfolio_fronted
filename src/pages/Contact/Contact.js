import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://final-portfolio-backend.vercel.app/contact",
        formData
      );
      alert("Message sent successfully");
      // Clear the form data
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert(
        `Error in sending message: ${
          err.response ? err.response.data.message : err.message
        }`
      );
    }
  };

  return (
    <div className="contact" id="contactus">
      <motion.h2
        className="col-12 mt-3 mb-1 text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}>
        Technologies Stack
      </motion.h2>
      <div className="line"></div>
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <motion.img
                src="https://burst.shopifycdn.com/photos/contact-us-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                alt="contact"
                className="image"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: [0, 360] }}
                transition={{ duration: 2, repeat: 1 }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <motion.div
              className="card2 d-flex card border-0 px-4 py-5"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <div className="row">
                <h6>
                  <div className="social-icons">
                    Check Link👉👉
                    <a href="https://www.linkedin.com/in/arun273404/">
                      <BsLinkedin color="blue" size={30} />
                    </a>
                    <a href="https://github.com/Ar273404">
                      <BsGithub color="blue" size={30} />
                    </a>
                    <a href="https://www.codechef.com/users/ar2734">
                      <SiCodechef color="blue" size={30} />
                    </a>
                    <a href="https://leetcode.com/u/Arun_0806/">
                      <SiLeetcode color="blue" size={30} />
                    </a>
                  </div>
                </h6>
              </div>

              <div className="row px-3 mb-4">
                <div className="lined" />
                <small className="or text-center">OR</small>
                <div className="lined" />
              </div>

              <div className="row px-3">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="mb-3"
                  value={formData.name}
                  onChange={handleChange}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="row px-3">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="mb-3"
                  value={formData.email}
                  onChange={handleChange}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="row px-3">
                <motion.textarea
                  name="message"
                  placeholder="Write your message"
                  className="mb-3"
                  value={formData.message}
                  onChange={handleChange}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="row px-3">
                <motion.button
                  onClick={handleSubmit}
                  type="submit"
                  className="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  SEND MESSAGE
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
