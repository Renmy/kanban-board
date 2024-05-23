import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title, tasks }) => {
  return (
    <div className={`w-[25%]  px-3 `}>
      <div
        className={`${title
          .replace(/\s+/g, "")
          .toLowerCase()} px-5 py-3 rounded-lg`}
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
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              assignee={task.assignee}
              dueDate={task.dueDate}
              priority={task.priority}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Column;
