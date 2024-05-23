import boardSvg from "../assets/icons/board1.svg";
import aboutSvg from "../assets/icons/about1.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-[240px] min-w-[240px] flex flex-col h-[80vh] py-12 bg-slate-100 gap-2 px-6">
      <Link to="/">
        <div className="flex gap-2 items-center hover:bg-slate-200 p-3 rounded-lg">
          <img src={boardSvg} alt="board-icon" />
          <p>Board</p>
        </div>
      </Link>
      <Link to="/about">
        <div className="flex gap-2 items-center hover:bg-slate-200 p-3 rounded-lg">
          <img src={aboutSvg} alt="about-icon" />
          <p>About</p>
        </div>
      </Link>
    </aside>
  );
}

export default Sidebar;
