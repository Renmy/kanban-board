import { useEffect, useState } from "react";
import Column from "./Column";
import React from "react";
import ManageTaskForm from "./ManageTaskForm";
import DeleteModal from "./DeleteModal";
import tasksData from "../utils/kanban.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DragDropContext } from "@hello-pangea/dnd";

const emptyTask = {
  title: "",
  description: "",
  assignee: "",
  status: "To Do",
  priority: "Low",
  dueDate: "",
};

const Board = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? tasksData
  );

  const filterTasks = (tasks, column) => {
    return tasks.filter((task) => task.status === column);
  };

  const [todo, setTodo] = useState(filterTasks(tasks, "To Do"));
  const [inProgress, setInProgress] = useState(
    filterTasks(tasks, "In Progress")
  );
  const [inReview, setInReview] = useState(filterTasks(tasks, "In Review"));
  const [done, setDone] = useState(filterTasks(tasks, "Done"));

  const [showModal, setShowModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [currentTask, setCurrentTask] = useState(emptyTask);

  const handleArrowClick = () => {
    setShowSideBar(true);
  };

  const showTaskDetails = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const addTask = (task) => {
    task.id = (tasks.length + 1).toString();
    setTasks((prev) => [...prev, task]);
    toast.success("New Task Added!", {
      position: "bottom-left",
    });
  };

  const editTask = (task) => {
    setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
    if (task.status === "Done") {
      toast.success("Task Completed! 🎉", {
        position: "bottom-left",
      });
    } else {
      toast.success("Task Successfully Edited!", {
        position: "bottom-left",
      });
    }
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    setShowDeleteModal(false);
    toast.error("Task Deleted! ❌", {
      position: "bottom-left",
    });
  };

  //handle both edit and add with the same form
  const handleTask = (task) => {
    task.id ? editTask(task) : addTask(task);
  };

  //Function to reorder tasks once dropped
  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDrag = (result) => {
    const { source, destination } = result;

    // Si no hay destino (se soltó fuera de un área droppable) o se soltó en la misma posición
    if (
      !destination ||
      (source.index === destination.index &&
        source.droppableId === destination.droppableId)
    ) {
      return;
    }

    const startColumn = source.droppableId;
    const endColumn = destination.droppableId;

    // Mover dentro de la misma columna
    if (startColumn === endColumn) {
      switch (startColumn) {
        case "To Do":
          setTodo((prev) => reorder(prev, source.index, destination.index));
          break;
        case "In Progress":
          setInProgress((prev) =>
            reorder(prev, source.index, destination.index)
          );
          break;
        case "In Review":
          setInReview((prev) => reorder(prev, source.index, destination.index));
          break;
        case "Done":
          setDone((prev) => reorder(prev, source.index, destination.index));
          break;
        default:
          break;
      }
    } else {
      // Mover a una columna diferente
      let sourceTasks, setSourceTasks;
      let destinationTasks, setDestinationTasks;
      // capturar los estados de las columnas implicadas
      switch (startColumn) {
        case "To Do":
          sourceTasks = [...todo];
          setSourceTasks = setTodo;
          break;
        case "In Progress":
          sourceTasks = [...inProgress];
          setSourceTasks = setInProgress;
          break;
        case "In Review":
          sourceTasks = [...inReview];
          setSourceTasks = setInReview;
          break;
        case "Done":
          sourceTasks = [...done];
          setSourceTasks = setDone;
          break;
        default:
          break;
      }

      switch (endColumn) {
        case "To Do":
          destinationTasks = [...todo];
          setDestinationTasks = setTodo;
          break;
        case "In Progress":
          destinationTasks = [...inProgress];
          setDestinationTasks = setInProgress;
          break;
        case "In Review":
          destinationTasks = [...inReview];
          setDestinationTasks = setInReview;
          break;
        case "Done":
          destinationTasks = [...done];
          setDestinationTasks = setDone;
          break;
      }

      const [movedTask] = sourceTasks.splice(source.index, 1);
      movedTask.status = endColumn;
      destinationTasks.splice(destination.index, 0, movedTask);

      //toast notification after moving tasks
      if (movedTask.status === "Done") {
        toast.success("Task Completed!🎉", {
          position: "bottom-left",
        });
      } else {
        toast.success("Task Successfully Edited!", {
          position: "bottom-left",
        });
      }

      setSourceTasks(sourceTasks);
      setDestinationTasks(destinationTasks);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // useEffect to control changes on tasks and refill columns
  useEffect(() => {
    setTodo(() => filterTasks(tasks, "To Do"));
    setInProgress(() => filterTasks(tasks, "In Progress"));
    setInReview(() => filterTasks(tasks, "In Review"));
    setDone(() => filterTasks(tasks, "Done"));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex flex-col py-5 px-16 w-full">
      <div className="flex items-center justify-between border-b-4 py-2 max-[675px]:flex-col">
        <h1 className="py-5 text-2xl pb-7 font-bold text-slate-700 max-[675px]:pb-4">
          Project Board
        </h1>
        <div>
          <button
            onClick={() => showTaskDetails(emptyTask)}
            htmlFor="tw-modal"
            className="cursor-pointer rounded bg-[#775DA6] text-white px-4 py-2 active:bg-slate-400 hover:bg-[#544274] ease-in duration-100 hover:scale-105 max-[675px]:mb-2"
          >
            ADD Task +
          </button>
        </div>
      </div>

      {/* {setShowSideBar && <SidebarSmallScreen />} */}

      {/* Modal to Create a New Task */}
      {showModal && (
        <ManageTaskForm
          closeModal={setShowModal}
          task={currentTask}
          handleTask={handleTask}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          task={currentTask}
          removeTask={removeTask}
        />
      )}
      <DragDropContext onDragEnd={(result) => handleDrag(result)}>
        <div className="flex flex-wrap justify-between gap-1 py-5">
          <Column
            title="To Do"
            tasks={todo}
            showTaskDetails={showTaskDetails}
            setShowDeleteModal={setShowDeleteModal}
            setCurrentTask={setCurrentTask}
          />

          <Column
            title="In Progress"
            tasks={inProgress}
            showTaskDetails={showTaskDetails}
            setShowDeleteModal={setShowDeleteModal}
            setCurrentTask={setCurrentTask}
          />

          <Column
            title="In Review"
            tasks={inReview}
            showTaskDetails={showTaskDetails}
            setShowDeleteModal={setShowDeleteModal}
            setCurrentTask={setCurrentTask}
          />

          <Column
            title="Done"
            tasks={done}
            showTaskDetails={showTaskDetails}
            setShowDeleteModal={setShowDeleteModal}
            setCurrentTask={setCurrentTask}
          />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
