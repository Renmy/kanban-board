import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Column from "./Column";
import Task from "./Task";
import React from "react";
import ManageTaskForm from "./ManageTaskForm";
import tasksData from "../utils/kanban.json";

const emptyTask = {
  title: "",
  description: "",
  assignee: "",
  assignee: "",
  status: "To Do",
  priority: "Low",
  dueDate: "",
};

const Board = () => {
  const [tasks, setTasks] = useState(tasksData);

  const filterTasks = (tasks, column) => {
    return tasks.filter((task) => task.status === column);
  };

  const [todo, setTodo] = useState(filterTasks(tasks, "To Do"));
  const [inProgress, setInProgress] = useState(
    filterTasks(tasks, "In Progress")
  );
  const [inReview, setInReview] = useState(filterTasks(tasks, "In Review"));
  const [done, setDone] = useState(filterTasks(tasks, "Done"));

  const [showModal, setShowModal] = useState(false);

  const [currentTask, setCurrentTask] = useState(emptyTask);

  // For when the user clicks on an existing task
  const showTaskDetails = (task) => {
    setIsFormSubmitted(false);
    setCurrentTask(task);
    setShowModal(true);
  };

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks((prev) => [...prev, task]);
  };

  const editTask = (task) => {
    setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
  };

  const removeTask = (task) => {};

  const handleTask = (task) => {
    task.id ? editTask(task) : addTask(task);
  };

  useEffect(() => {
    setTodo(() => filterTasks(tasks, "To Do"));
    setInProgress(() => filterTasks(tasks, "In Progress"));
    setInReview(() => filterTasks(tasks, "In Review"));
    setDone(() => filterTasks(tasks, "Done"));
  }, [tasks]);

  return (
    <div className="flex flex-col p-5 w-full">
      <div className="flex items-center justify-between border-b-4 py-2">
        <h1 className="py-5 text-2xl pb-7 font-bold text-slate-700 ">
          Project Board
        </h1>
        <div>
          <button
            onClick={() => showTaskDetails(emptyTask)}
            htmlFor="tw-modal"
            className="cursor-pointer rounded bg-[#775DA6] text-white px-4 py-2 active:bg-slate-400 hover:bg-[#544274] ease-in duration-100 hover:scale-105"
          >
            ADD Task +
          </button>
        </div>
      </div>

      {/* Modal to Create a New Task */}
      {showModal && (
        <ManageTaskForm
          closeModal={setShowModal}
          task={currentTask}
          handleTask={handleTask}
        />
      )}

      <div className="flex justify-between gap-8 py-5">
        <Column title="To Do" tasks={todo} showTaskDetails={showTaskDetails} />
        <Column
          title="In Progress"
          tasks={inProgress}
          showTaskDetails={showTaskDetails}
        />
        <Column
          title="In Review"
          tasks={inReview}
          showTaskDetails={showTaskDetails}
        />
        <Column title="Done" tasks={done} showTaskDetails={showTaskDetails} />
      </div>
    </div>
  );
};

export default Board;
