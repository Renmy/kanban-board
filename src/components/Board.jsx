import Task from "./Task";
import tasks from "../utils/kanban.json";
import React from "react";
import AddTaskForm from "./AddTaskForm";

const Board = ({ tasks }) => {
  const { id, title, assignee } = tasks[0];
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="board-container">
      <div className="flex items-center justify-between border-b-4 py-2">
        <h1 className="board-title">My Board</h1>
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

      <div className="board-body">
        <Task id={id} title={title} assignee={assignee} />
      </div>
    </div>
  );
};

export default Board;
