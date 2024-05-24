import React from "react";
import { useState, useEffect } from "react";

function AddTaskForm({
  closeModal,
  task,
  setIsFormSubmitted,
  onFormDataChange,
}) {
  // Captures the current date
  const currentDate = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    title: task?.title ?? "",
    description: task?.description ?? "",
    assignee: task?.assignee ?? "",
    status: task?.status ?? "To Do",
    priority: task?.priority ?? "Low",
    createdDate: task?.createdDate ?? currentDate,
    dueDate: "",
  });

  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const [formWarningMessage, setFormWarningMessage] = React.useState(false);

  // Changes the state of the form everytime there is a change
  const handleFormChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  // Validated the form (checks if all inputs are filled out)
  const isFormFilled = () => {
    for (let key in formData) {
      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    const formFilled = isFormFilled();
    if (!formFilled) {
      setFormWarningMessage(true);
    } else {
      setFormWarningMessage(false);
      setIsFormSubmitted(true);
      closeModal(false);
    }
  };

  const convertDateFormat = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${month}/${day}/${year}`;
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl text-gray-700 font-semibold">
                Create a new task
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal(false)}
              >
                <span className="bg-transparent text-red-500  h-6 w-6 text-2xl block outline-none focus:outline-none hover:scale-125">
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="w-full max-w-lg">
                {/* Title */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.title}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="title"
                      name="title"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={handleFormChange}
                      value={formData.description}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="description"
                      name="description"
                      type="text"
                      placeholder="A description of your task"
                    />
                  </div>
                </div>

                {/* Assignee and Status */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="assignee"
                    >
                      Assignee
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.assignee}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="assignee"
                      name="assignee"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="status"
                    >
                      Status
                    </label>
                    <div className="relative">
                      <select
                        onChange={handleFormChange}
                        defaultValue={formData.status}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="status"
                        name="status"
                      >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="In Review">In Review</option>
                        <option value="Done">Done</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Priority and Date Picker */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="priority"
                    >
                      Priority
                    </label>
                    <div className="relative">
                      <select
                        onChange={handleFormChange}
                        defaultValue={formData.priority}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="priority"
                        name="priority"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="date"
                    >
                      Due Date
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.dueDate}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="dueDate"
                      name="dueDate"
                      type="date"
                      placeholder=""
                      // min={currentDate}
                    />
                  </div>
                </div>
                {formWarningMessage && (
                  <p className="text-red-400 text-center">
                    Please fill in all input fields
                  </p>
                )}
              </form>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-slate-600 bg-gray-300 hover:bg-gray-400 font-bold uppercase px-6 py-3 text-sm outline-none rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                type="button"
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#775DA6] hover:bg-[#544274] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default AddTaskForm;
