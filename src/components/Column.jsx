import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title, tasks, showTaskDetails, setShowDeleteModal }) => {
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
            <a
              className="cursor-pointer"
              onClick={() => showTaskDetails(task)}
              key={task.id}
            >
              <Task
                id={task.id}
                title={task.title}
                assignee={task.assignee}
                dueDate={task.dueDate}
                priority={task.priority}
                setShowDeleteModal={setShowDeleteModal}
              />
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Column;
