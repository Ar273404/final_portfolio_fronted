import React from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Hospital Management",
    description:
      "👉 hospital management system with appointment booking, admin panel, and appointment display. Demo: Admin email: admin@gmail.com, Password: 12345.",
    details: ["Mongodb", "Express", "React", "Node Js"],
    imgSrc:
      "https://a.storyblok.com/f/86602/965x541/f99b8b2b37/hospital-management-system-sm-01.png",
    link: "https://hospital-management-frontend-bp5y.onrender.com/",
    gitl: "https://github.com/Ar273404/hospitalManagement",
  },
  {
    id: 2,
    title: "Job posting/Seeking website",
    description:
      "👉 Built a full-stack job site for posting jobs, reviewing applications, managing details, with secure data, real-time updates, and a responsive UI. ",
    badge: "Mern stack",
    details: ["Mongodb", "Express", "React", "Node Js"],
    imgSrc:
      "https://img.freepik.com/premium-photo/online-job-search-modish-website-worker-search-job-opportunities_31965-80700.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722124800&semt=ais_user",
    link: "https://arun-job-seeker.netlify.app/",
    gitl: "https://github.com/Ar273404/job-frontend",
  },
  {
    id: 3,
    title: "Food Delivery Website",
    description:
      "👉 Developed a food delivery website with user authentication, responsive design, admin dashboard for orders and restaurants, and payment options.",
    badge: "Mern stack",
    details: ["Mongodb", "Express", "React", "Node Js"],
    imgSrc:
      "https://www.pngitem.com/pimgs/m/69-694009_transparent-food-delivery-clipart-pizza-free-home-delivery.png",
    link: "https://finalfoodfronted.onrender.com",
    gitl: "https://github.com/Ar273404/finalfoodfronted",
  },
  {
    id: 4,
    title: "Blood Matcher",
    description:
      "Developed a blood matcher that helps identify compatible donors and recipients, ensuring accurate blood donations and improving transfusion efficiency.",
    details: ["Html", "Css", "Javascript"],
    imgSrc:
      "https://thumbs.dreamstime.com/b/blood-groups-donor-recipients-type-compatibility-possible-combinations-donation-match-arrows-show-which-can-be-used-311979870.jpg",
    link: " https://ar273404.github.io/bloodmatch.git.io/",
    gitl: "https://github.com/Ar273404/bloodmatch.git.io",
  },
  {
    id: 5,
    title: "Candy Crush",
    description:
      "Created a Candy Crush game with match-3 gameplay, colorful graphics, and challenging levels for an engaging experience.",
    details: ["Html", "Css", "Javascript"],
    imgSrc:
      "https://www.shutterstock.com/image-vector/match-3-candy-game-ui-600nw-2259723079.jpg",
    link: "https://ar273404.github.io/Candy.git.io/",
    gitl: "https://github.com/Ar273404/Candy.git.io",
  },
  {
    id: 6,
    title: "Quiz Game",
    description:
      "Created a quiz game that asks questions, awards scores for correct answers, and tracks user performance with a dynamic scoring system.",
    details: ["Html", "Css", "Javascript"],
    imgSrc:
      "https://thumbs.dreamstime.com/z/quiz-background-colorful-brushstrokes-oil-acrylic-paint-inscription-text-gradient-brush-isolated-white-184770923.jpg",
    link: "https://ar273404.github.io/Quiz/",
    gitl: "https://github.com/Ar273404/Quiz",
  },
];

const Project = () => {
  return (
    <div className="container project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        👉 top recent project with live links and source code
      </p>
      <div class="row" id="ads">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-10">
          {projects.map((projects)=>{
            return (
              <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img
                    src={projects.imgSrc}
                    alt="product1"
                    class="h-full w-full object-contain"
                  />
                </div>

                <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div class="text-center">
                    <h3 class="text-base font-bold text-gray-800 mb-2">
                      {projects.title}
                    </h3>
                    <h4 class="text-sm text-blue-600 font-bold mt-2 mb-2">
                      {projects.description}
                    </h4>
                    <div>
                      {projects.details.map((item) => {
                        return (
                          <span className="card-detail-badge ml-1">{item}</span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="font-[sans-serif] space-x-4 space-y-4 text-center mt-3">
                    <a href={projects.link}>
                      <button
                        type="button"
                        class="px-3 py-2 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-red-700 hover:bg-blue-800 active:bg-blue-700">
                        Live
                      </button>
                    </a>
                    <a href={projects.gitl}>
                      <button
                        type="button"
                        class="px-3 py-2 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-purple-700 hover:bg-purple-800 active:bg-purple-700">
                        GitHub
                      </button>
                    </a>
                  </div>
                  {/* <div class="flex justify-center space-x-1 mt-4">
                    <svg
                      class="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
