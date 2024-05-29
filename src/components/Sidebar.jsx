import boardSvg from "../assets/icons/board1.svg";
import aboutSvg from "../assets/icons/about1.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ showSideBar, setShowSideBar, handleArrowClick }) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowSideBar(false);
      } else {
        setShowSideBar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount to set the initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <aside className="w-[240px] min-w-[240px] flex flex-col min-h-[80vh] py-12 bg-slate-100 gap-2 px-6 hidden md:block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 rounded-lg" : ""
          }
        >
          <div className="flex gap-2 items-center hover:bg-slate-200 p-3 rounded-lg">
            <img src={boardSvg} alt="board-icon" />
            <p>Board</p>
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 rounded-lg" : ""
          }
        >
          <div className="flex gap-2 items-center hover:bg-slate-200 p-3 rounded-lg">
            <img src={aboutSvg} alt="about-icon" />
            <p>About</p>
          </div>
        </NavLink>
      </aside>

      <FontAwesomeIcon
        className="md:hidden fixed top-1/2 left-2 text-3xl text-slate-300 hover:text-slate-400 cursor-pointer"
        icon={faChevronRight}
        onClick={handleArrowClick}
      />
    </>
  );
}

export default Sidebar;
