import boardSvg from "../assets/icons/board1.svg";
import aboutSvg from "../assets/icons/about1.svg";

function Sidebar() {
  return (
    <aside>
      <a href="/">
        <div className="sidebar-menu-item">
          <img src={boardSvg} alt="board-icon" />
          <p>My Board</p>
        </div>
      </a>
      <a href="/about">
        <div className="sidebar-menu-item">
          <img src={aboutSvg} alt="about-icon" />
          <p>About</p>
        </div>
      </a>
    </aside>
  );
}

export default Sidebar;
