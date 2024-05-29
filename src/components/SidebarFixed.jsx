import React from "react";
import boardSvg from "../assets/icons/board1.svg";
import aboutSvg from "../assets/icons/about1.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function SidebarFixed({ handleArrowClick }) {
  return (
    <>
      <aside className="w-[240px] min-w-[240px] flex flex-col min-h-[100%] py-32 bg-slate-100 gap-2 px-6 fixed z-40 shadow-lg min-[600px]:hidden">
        <NavLink
          to="/"
          onClick={handleArrowClick}
          className={({ isActive }) =>
            isActive ? "bg-slate-200 rounded-lg" : ""
          }
        >
          <div className="flex gap-2 items-center hover:bg-slate-200 p-3 rounded-xl">
            <img src={boardSvg} alt="board-icon" />
            <p>Board</p>
          </div>
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleArrowClick}
          className={({ isActive }) =>
            isActive ? "bg-slate-200 rounded-lg" : ""
          }
        >
          <div className="flex gap-2 items-center hover:bg-slate-200 p-3 rounded-lg">
            <img src={aboutSvg} alt="about-icon" />
            <p>About</p>
          </div>
        </NavLink>

        <FontAwesomeIcon
          className="min-[600px]:hidden fixed top-1/2 left-2 text-3xl text-slate-300 hover:text-slate-400 cursor-pointer"
          icon={faChevronLeft}
          onClick={handleArrowClick}
        />
      </aside>
      <div
        onClick={handleArrowClick}
        className="min-[600px]:hidden opacity-25 fixed inset-0 z-30 bg-black"
      ></div>
    </>
  );
}

export default SidebarFixed;
