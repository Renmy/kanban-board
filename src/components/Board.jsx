import { useState } from "react";
import Column from "./Column";
import Task from "./Task";

const filterTasks = (tasks, column) => {
  return tasks.filter((task) => task.status === column);
};

const Board = ({ tasks }) => {
  const [todo, setTodo] = useState(filterTasks(tasks, "To Do"));
  const [inProgress, setInProgress] = useState(
    filterTasks(tasks, "In Progress")
  );
  const [inReview, setInReview] = useState(filterTasks(tasks, "In Review"));
  const [done, setDone] = useState(filterTasks(tasks, "Done"));

  return (
    <div className="flex flex-col p-5 w-full">
      <h1 className="p-5 text-2xl border-b-4 border-b-slate-500 pb-7 font-semibold text-slate-700 ">
        Project Board
      </h1>
      <div className="flex justify-evenly gap-8 p-5">
        <Column title="To Do" tasks={todo} />
        <Column title="In Progress" tasks={inProgress} />
        <Column title="In Review" tasks={inReview} />
        <Column title="Done" tasks={done} />
      </div>
    </div>
  );
};

export default Board;
