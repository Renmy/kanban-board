import Task from "./Task";
import { Droppable, Draggable } from "@hello-pangea/dnd";

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
      <Droppable droppableId={title}>
        {(droppableProvided) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="py-5 flex flex-col gap-2"
          >
            {!tasks.length ? (
              <h3 className="text-sm text-slate-700 text-center">
                No Tasks {title}
              </h3>
            ) : (
              tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(draggableProvided) => (
                    <div
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="relative rounded-lg shadow-lg hover:shadow-none hover:translate-y-0.5"
                    >
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
                  )}
                </Draggable>
              ))
            )}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
