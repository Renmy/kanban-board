import tasks from "../utils/kanban.json";
import Board from "../components/Board";

const BoardPage = () => {
  return <Board tasks={tasks} />;
};

export default BoardPage;
