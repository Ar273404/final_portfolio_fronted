import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsFillSunFill size={20} />
          )}
        </div>

        <div className="container home-content">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            Hi 👋 I'm Arun Yadav a
          </motion.h2>
          <p className="move">
            <Typewriter
              options={{
                strings: [
                  "CSE Student !",
                  "Problem Solver !",
                  "FullStack Developer !",
                  "MernStack Developer !",
                  "Programmer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <motion.div
            className="home-buttons"
            initial={{ y: 0 }}
            animate={{ y: -10 }}
            transition={{ y: { duration: 0.5, yoyo: Infinity } }}>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <button className="btn cancel-btn">Hire me</button>
            </Link>
            <a
              href="https://drive.google.com/file/d/1MD80DCpILohn9hlIF0CiVqzhuTsBY47M/view?usp=drivesdk"
              className="btn confirm-btn">
              view Resume
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
