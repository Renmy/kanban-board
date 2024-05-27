import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Column = ({
  title,
  tasks,
  showTaskDetails,
  setShowDeleteModal,
  setCurrentTask,
}) => {
  const handleTrashIconClick = (task) => {
    setCurrentTask(task);
    setShowDeleteModal(true);
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
            <div className="relative">
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
                />
              </a>
              <FontAwesomeIcon
                className="absolute top-3 right-3 text-xs text-slate-300 cursor-pointer hover:text-red-500 hover:scale-125"
                icon={faTrash}
                onClick={() => handleTrashIconClick(task)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Column;
