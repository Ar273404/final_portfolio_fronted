import React from 'react'; //3,4,6
import images from '../image/3.png'
import image from './profile-pic (3).png';
import './About.css';
import { motion } from "framer-motion";
const About=()=>
{
    return (
      <>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
              <figure class="swing">
             
                  <motion.img src={images} alt="profile pic" />{" "}
                  {/* https://cdn.shopify.com/s/files/1/0279/6375/2523/files/PhotoRoom_20221228_144238_480x480.png?v=1673982757 */}
               
              </figure>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content ">
              <h1>About me</h1>
              <p>
                Greetings! I'm Arun yadav, a dedicated B.Tech student with a
                profound passion for technology and innovation. Currently
                enrolled at Madan Mohan Malaviya, I'm pursuing a Bachelor's
                degree in Computer Science . My academic journey has been
                focused on gaining in-depth knowledge in Computer Science
                technology. Proficient in [Programming Languages] and equipped
                with skills in [Technical Areas], I bring a unique blend of
                academic knowledge and hands-on experience to any project or
                endeavor. I take pride in successfully completing [Highlight
                Notable Projects], where I've applied my skills to address
                real-world challenges. Looking ahead, my goal is to [Express
                Future Aspirations and Career Goals], leveraging my skills and
                knowledge to contribute meaningfully to the field of [Your Field
                of Engineering]. If you share a similar passion for technology
                and innovation, I'd love to connect! Feel free to connect with
                me on [LinkedIn], or drop me an email at [Your Email Address].
                Thank you for taking the time to get to know me. I'm excited
                about the future possibilities in the ever-evolving world of
                technology!
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;