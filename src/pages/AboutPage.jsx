import React from "react";
import aboutImg from "../assets/images/peopleworking.png";
import alejandro from "../assets/images/alejandro.jpeg";
import renmy from "../assets/images/renmy.jpeg";
import alexis from "../assets/images/alexis.jpeg";

const AboutPage = () => {
  return (
    <div className="flex flex-col p-5 w-full">
      <h1 className=" text-2xl border-b-4 border-b-slate-500 pb-7 text-slate-700  py-5 font-bold ">
        About
      </h1>
      <div className="flex p-4 justify-between gap-5">
        <div className="w-2/3 flex flex-col gap-14">
          <p className="text-sm text-slate-700 w-3/4 font-semibold">
            A Kanban board is a visual management tool used in project
            management to track and optimize workflows. It typically consists of
            columns representing different stages of a process (e.g., To Do, In
            Progress, Done), and tasks are represented by cards that move
            through these stages. The Kanban board helps teams visualize work,
            limit work-in-progress, and maximize efficiency by identifying
            bottlenecks and ensuring a smooth flow of tasks from start to
            finish.
          </p>
          <img src={aboutImg} alt="about img" className="h-[80%] w-[80%] " />
        </div>
        <div className="w-1/3 flex flex-col gap-5 px-10">
          <div className="flex flex-col shadow-lg text-slate-700 gap-5 py-5 mx-5 rounded-lg ">
            <h3 className="font-bold text-center">Team Members</h3>
            <div className="flex justify-evenly items-center">
              <a
                href="https://www.linkedin.com/in/alejandro-cartagena/"
                target="_blank"
              >
                <img
                  src={alejandro}
                  alt="team-pic"
                  className="h-10 rounded-full shadow-md shadow-purple-400 hover:scale-105 transition-all"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alexis-diaz-6340722/"
                target="_blank"
              >
                <img
                  src={alexis}
                  alt="team-pic"
                  className="h-10 rounded-full shadow-md shadow-purple-400 hover:scale-105 transition-all"
                />
              </a>
              <a href="https://www.linkedin.com/in/renmye/" target="_blank">
                <img
                  src={renmy}
                  alt="team-pic"
                  className="h-10 rounded-full shadow-md shadow-purple-400 hover:scale-105 transition-all"
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
