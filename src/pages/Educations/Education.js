import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { FaUserGraduate } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
const Education = () => {
  return (
    <>
      <div className="work" id="education">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education
          </h2>
          <hr />
          <VerticalTimeline lineColor="grey" className="time">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "16px solid  blue",
              }}
              date="2021-2025"
              iconStyle={{ background: "blue", color: "#fff" }}
              icon={<FaUserGraduate />}>
              <div className="bo">
                <h3 className="vertical-timeline-element-title col-1">Btech</h3>
                <p>
                  <span className="col-1">collage:</span> Mmmut Gorakhpur
                </p>
                <p>
                  <span className="col-1">Address:</span> Gorakhpur-Deoria road
                  , Up
                </p>
                <p>
                  <span className="col-1">Branch:</span> Computer Science
                </p>
                <p>
                  <span className="col-1">Current Year:</span> Final(4th) Year
                </p>
                <p>
                  <span className="col-1">Current Cgpa:</span> 7.6 cgpa
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "16px solid  green",
              }}
              date="2018-2019"
              iconStyle={{ background: "green", color: "#fff" }}
              icon={<FaBookOpenReader />}>
              <div className="bo">
                <h3 className="vertical-timeline-element-title col-2">
                  Intermediate(12th)
                </h3>

                <p>
                  <span className="col-2">School:</span> Lpm Public School ,
                  Gola Bazar
                </p>
                <p>
                  <span className="col-2">Address:</span> Gola Bazar , Gorakhpur
                </p>
                <p>
                  <span className="col-2">Board:</span> Cbse
                </p>
                <p>
                  <span className="col-2">Stream:</span> Mathematics
                </p>
                <p>
                  <span className="col-2">Percentage:</span> 79.00%
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "16px solid  purple",
              }}
              date="2016-2017"
              iconStyle={{ background: "purple", color: "#fff" }}
              icon={<FaPenAlt />}>
              <div className="bo">
                <h3 className="vertical-timeline-element-title col-3">
                  Matriculation(10th)
                </h3>

                <p>
                  <span className="col-3">School:</span> Blooming Buds Acad ,
                  Khalilabad
                </p>
                <p>
                  <span className="col-3">Adress:</span> Khalilabad , Santkabir
                  Nagar
                </p>
                <p>
                  <span className="col-3">Board:</span> Cbse
                </p>
                <p>
                  <span className="col-3">Stream:</span> Math / Science
                </p>
                <p>
                  <span className="col-3">Cgpa:</span> 10.00 cgpa
                </p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
