import KanbanIcon from "../assets/images/kanban.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container"></div>
        <img className="nav-img" src={KanbanIcon} alt="kanban" srcSet="" />
        <h1>Task-To-Go</h1>
      </nav>
    </>
  );
}

export default Navbar;
