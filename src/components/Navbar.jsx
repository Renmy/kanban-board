import KanbanIcon from "../assets/images/kanban.png";
import userSvg from "../assets/icons/user.svg";
import notifySvg from "../assets/icons/notification.svg";

function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow-lg ">
      <div className="flex items-center gap-4">
        <img className="h-16" src={KanbanIcon} alt="kanban" srcSet="" />
        <h1 className="text-3xl font-semibold text-slate-700">Task-To-Go</h1>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          name="search"
          className="bg-slate-100 px-4 py-1 rounded-xl text-sm focus:border-purple-800/60 focus:outline-none focus:ring-0 focus:border-2"
          placeholder="Search..."
        />
        <img className="h-8" src={notifySvg} alt="kanban" />
        <img className="h-8" src={userSvg} alt="kanban" />
      </div>
    </nav>
  );
}

export default Navbar;
