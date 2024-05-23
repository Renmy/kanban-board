import { useState } from "react";
import Column from "./Column";
import Task from "./Task";

const filterTasks = (tasks, column) => {
  return tasks.filter((task) => task.status === column);
};
import React from "react";
import AddTaskForm from "./AddTaskForm";

const Board = ({ tasks }) => {
  const [todo, setTodo] = useState(filterTasks(tasks, "To Do"));
  const [inProgress, setInProgress] = useState(
    filterTasks(tasks, "In Progress")
  );
  const [inReview, setInReview] = useState(filterTasks(tasks, "In Review"));
  const [done, setDone] = useState(filterTasks(tasks, "Done"));

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="flex flex-col p-5 w-full">
      <div className="flex items-center justify-between border-b-4 py-2">
        <h1 className="p-5 text-2xl border-b-4 border-b-slate-500 pb-7 font-semibold text-slate-700 ">
          Project Board
        </h1>
        <div>
          <button
            onClick={() => setShowModal(true)}
            htmlFor="tw-modal"
            className="cursor-pointer rounded bg-[#775DA6] text-white px-4 py-2 active:bg-slate-400 hover:bg-[#544274] ease-in duration-100 hover:scale-105"
          >
            ADD Task +
          </button>
        </div>
      </div>

      {/* Modal to Create a New Task */}
      {showModal ? <AddTaskForm setShowModal={setShowModal} /> : null}

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
