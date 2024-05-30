import logo from "../assets/images/Task-To-Go-Logo.png";
import userSvg from "../assets/icons/user.svg";
import notifySvg from "../assets/icons/notification.svg";

function Navbar() {
  return (
    <nav className="flex justify-between py-4 pl-4 pr-16 shadow-lg max-[530px]:pr-4">
      <div className="flex items-center gap-4">
        <img
          className="h-16 max-[530px]:h-12"
          src={logo}
          alt="kanban"
          srcSet=""
        />
      </div>
      <div className="flex items-center gap-4">
        <img className="h-8" src={notifySvg} alt="kanban" />
        <img className="h-8" src={userSvg} alt="kanban" />
      </div>
    </nav>
  );
}

export default Navbar;
