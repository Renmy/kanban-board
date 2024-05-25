import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title, tasks, showTaskDetails, removeTask }) => {
  const handleDelete = (task) => {
    confirm("Are you sure you want to delete this task?") && removeTask(task);
  };
  return (
    <div className={`w-[25%]  px-0 `}>
      <div
        className={`${title
          .replace(/\s+/g, "")
          .toLowerCase()} px-5 py-3 rounded-lg font-semibold`}
      >
        <h1 className="text-2xl text-white  text-center">{title}</h1>
        <h3 className="text-xs text-slate-100 text-center w-full">
          {tasks.length} Tasks
        </h3>
      </div>
      <div className="py-3 flex flex-col gap-2">
        {!tasks ? (
          <h3>There is no tasks {title}</h3>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="relative">
              <a
                className="cursor-pointer"
                onClick={() => showTaskDetails(task)}
              >
                <Task task={task} />
              </a>
              <button
                className="absolute top-0 right-0"
                onClick={() => handleDelete(task)}
              >
                <span className="bg-transparent text-red-500  h-6 w-6 text-lg block outline-none focus:outline-none hover:scale-125">
                  ×
                </span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Column;
