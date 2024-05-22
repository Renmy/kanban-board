import Task from "./Task";
import tasks from "../utils/kanban.json";

const Board = ({ tasks }) => {
  const { id, title, assignee } = tasks[0];
  return (
    <div className="board-container">
      <h1 className="board-title">My Board</h1>
      <div className="board-body">
        <Task id={id} title={title} assignee={assignee} />
      </div>
    </div>
  );
};

export default Board;
