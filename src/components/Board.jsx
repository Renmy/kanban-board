import { useEffect, useState } from "react";
import Column from "./Column";
import Task from "./Task";
import React from "react";
import AddTaskForm from "./AddTaskForm";
import tasks from "../utils/kanban.json";

const filterTasks = (tasks, column) => {
  return tasks.filter((task) => task.status === column);
};

const emptyTask = {
  title: "",
  description: "",
  assignee: "",
  status: "To Do",
  priority: "Low",
  date: "",
};

const Board = () => {
  const [todo, setTodo] = useState(filterTasks(tasks, "To Do"));
  const [inProgress, setInProgress] = useState(
    filterTasks(tasks, "In Progress")
  );
  const [inReview, setInReview] = useState(filterTasks(tasks, "In Review"));
  const [done, setDone] = useState(filterTasks(tasks, "Done"));

  const [showModal, setShowModal] = useState(false);

  const [currentTask, setCurrentTask] = useState(emptyTask);

  const showTaskDetails = (task) => {
    setIsFormSubmitted(false);
    setCurrentTask(task);
    setShowModal(true);
  };

  // For form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "To Do",
    priority: "Low",
    createdDate: "",
    dueDate: "",
  });

  // This is used to only append data if user successfully hit Create or Save button
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
  };

  // When form is submitted, appends task to corresponding container
  useEffect(() => {
    if (isFormSubmitted && !currentTask.id) {
      formData.id = tasks.length + 1;
      tasks.push(formData);
      updateTask(formData.status);
    } else if (isFormSubmitted && currentTask.id) {
      const taskToEdit = tasks.find((item) => item.id === currentTask.id);
      taskToEdit.title = formData.title;
      taskToEdit.description = formData.description;
      taskToEdit.assignee = formData.assignee;
      taskToEdit.status = formData.status;
      taskToEdit.priority = formData.priority;
      taskToEdit.dueDate = formData.dueDate;
      updateTask(formData.status);
    }
  }, [isFormSubmitted]);

  const updateTask = (status) => {
    switch (status) {
      case "To Do":
        setTodo(filterTasks(tasks, "To Do"));
        break;
      case "In Progress":
        setInProgress(filterTasks(tasks, "In Progress"));
        break;
      case "In Review":
        setInReview(filterTasks(tasks, "In review"));
        break;
      case "Done":
        setDone(filterTasks(tasks, "Done"));
        break;
    }
  };

  return (
    <div className="flex flex-col p-5 w-full">
      <div className="flex items-center justify-between border-b-4 py-2">
        <h1 className="py-5 text-2xl pb-7 font-semibold text-slate-700 ">
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
      {showModal ? (
        <AddTaskForm
          closeModal={setShowModal}
          task={currentTask}
          setIsFormSubmitted={setIsFormSubmitted}
          onFormDataChange={handleFormChange}
        />
      ) : null}

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
