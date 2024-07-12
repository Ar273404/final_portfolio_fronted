import "./Menu.css";
import {
  FcReading,
  FcHome,
  FcContacts,
  FcAbout,
  FcBiotech,
} from "react-icons/fc";
import { MdWork } from "react-icons/md";
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // Import motion for animations
import image from "./profile-pic (2).png";

export const Menu = (props) => {
  return (
    <>
      {!props.toggle ? (
        <>
          <motion.div
            className="avatar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <img src={image} alt="profile pic" />
          </motion.div>

          <motion.div
            className="nav-items"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="nav-item">
              {[
                { to: "home", icon: <FcHome />, title: "Home" },
                { to: "about", icon: <FcAbout />, title: "About" },
                { to: "education", icon: <FcReading />, title: "Education" },
                { to: "techstack", icon: <FcBiotech />, title: "Tech Stack" },
                { to: "projects", icon: <MdWork />, title: "Projects" },
                { to: "contactus", icon: <FcContacts />, title: "Contact" },
              ].map((link, index) => (
                <div className="nav-link" key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    className="d-flex align-items-center"
                    activeClass="active" // Add active class
                  >
                    <span className="icon">{link.icon}</span>
                    <span className="title">{link.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className="nav-items"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="nav-item">
              {[
                { to: "home", icon: <FcHome /> },
                { to: "about", icon: <FcAbout />},
                { to: "education", icon: <FcReading />},
                { to: "techstack", icon: <FcBiotech />},
                { to: "projects", icon: <MdWork />},
                { to: "contactus", icon: <FcContacts />},
              ].map((link, index) => (
                <div className="nav-link" key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    className="d-flex align-items-center"
                    activeClass="active" // Add active class
                  >
                    <span className="icon">{link.icon}</span>
                    <span className="title">{link.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};
