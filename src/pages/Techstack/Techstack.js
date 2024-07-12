import React from "react";
import "./Techstack.css";
import { motion } from "framer-motion"; // Import motion
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <motion.h2
          className="col-12 mt-3 mb-1 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}>
          Technologies Stack
        </motion.h2>
        <div className="line"></div>
        <p className="pb-3 text-center">
          👉 including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>

        <div className="row">
          {TechstackList.map((tech) => (
            <motion.div
              key={tech._id}
              className="col-md-3"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }} // Spin once
              transition={{ duration: 1 }} // Duration of the spin
            >
              <div className="card m-2">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }} // Optional hover effect
                      >
                        <tech.icon className="tech-icon" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4>{tech.name}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
