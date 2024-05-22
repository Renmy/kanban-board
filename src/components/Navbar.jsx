import KanbanIcon from "../assets/images/kanban.png";
import userSvg from "../assets/icons/user.svg";
import notifySvg from "../assets/icons/notification.svg";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <img className="nav-img" src={KanbanIcon} alt="kanban" srcSet="" />
          <h1>Task-To-Go</h1>
        </div>
        <div className="nav-container">
          <input type="text" className="search" placeholder="Search..." />
          <img className="nav-img" src={notifySvg} alt="kanban" srcSet="" />
          <img className="nav-img" src={userSvg} alt="kanban" srcSet="" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
