import React from "react";
import aboutImg from "../assets/images/peopleworking.png";
import alejandro from "../assets/images/alejandro.jpeg";
import renmy from "../assets/images/renmy.jpeg";
import alexis from "../assets/images/alexis.jpeg";

const AboutPage = () => {
  return (
    <div className="flex flex-col py-5 px-16 w-full">
      <h1 className=" text-2xl border-b-4 border-b-slate-200 pb-9 text-slate-700  py-7 font-bold ">
        About
      </h1>
      <div className="flex flex-col md:flex-row py-5 justify-between gap-5">
        <div className="w-full md:w-2/3 flex flex-col gap-14">
          <p className="text-sm text-slate-500 w-full md:w-3/4 font-semibold tracking-wide">
            A Kanban board is a visual management tool used in project
            management to track and optimize workflows. It typically consists of
            columns representing different stages of a process (e.g., To Do, In
            Progress, Done), and tasks are represented by cards that move
            through these stages. The Kanban board helps teams visualize work,
            limit work-in-progress, and maximize efficiency by identifying
            bottlenecks and ensuring a smooth flow of tasks from start to
            finish.
          </p>
          <img
            src={aboutImg}
            alt="about img"
            className="md:h-[70%] md:w-[70%] "
          />
        </div>
        <div className="w-full md:w-1/3 max-w-[400px] flex flex-col gap-5 ">
          <div className="flex flex-col shadow-lg text-slate-700 gap-5 py-5 rounded-lg">
            <h3 className="text-xl font-bold text-center pb-2">Team Members</h3>
            <div className="flex justify-evenly items-center">
              <a
                href="https://www.linkedin.com/in/alejandro-cartagena/"
                target="_blank"
              >
                <img
                  src={alejandro}
                  alt="team-pic"
                  className="h-20 rounded-full shadow-md shadow-purple-400 hover:scale-105 transition-all"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alexis-diaz-6340722/"
                target="_blank"
              >
                <img
                  src={alexis}
                  alt="team-pic"
                  className="h-20 rounded-full shadow-md shadow-purple-400 hover:scale-105 transition-all"
                />
              </a>
              <a href="https://www.linkedin.com/in/renmye/" target="_blank">
                <img
                  src={renmy}
                  alt="team-pic"
                  className="h-20 rounded-full shadow-md shadow-purple-400 hover:scale-105 transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
