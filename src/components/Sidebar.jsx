import boardSvg from "../assets/icons/board.svg";

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
        <div>
          <img />
          <p>Board</p>
        </div>
      </a>
    </aside>
  );
}

export default Sidebar;
