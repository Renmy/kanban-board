/* eslint-disable react/prop-types */
const getInitials = (str) => {
  let initials = str.split(" ");

  return (
    initials[0][0] + (initials.length > 1 && initials[1] ? initials[1][0] : "")
  );

};
const priorityColors = (str) => {
  switch (str) {
    case "High":
      return "bg-red-400";
    case "Medium":
      return "bg-yellow-400";
    case "Low":
      return "bg-green-400";
  }
};

const borderColors = (str) => {
  switch (str) {
    case "To Do":
      return "hover:border-[#008ba3]/20 hover:border-2";
    case "In Progress":
      return "hover:border-[#ff5531]/20 hover:border-2";
    case "In Review":
      return "hover:border-[#ad7d1b]/20 hover:border-2";
    case "Done":
      return "hover:border-[#3fb182]/20 hover:border-2";
  }
};

const Task = ({ task }) => {
  const { id, title, assignee, dueDate, priority, status } = task;

  return (
    <div
      className={`flex justify-center  text-slate-700 bg-slate-100 p-3 rounded-lg`}
    >
      <div className="flex flex-col w-3/4 gap-1 justify-center">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-xs">Due date: {dueDate}</span>
        <span
          className={`text-xs text-white p-1 ${priorityColors(
            priority
          )} w-fit rounded-lg`}
        >
          {priority}
        </span>
      </div>
      <div className="flex flex-col w-1/4 justify-center items-center">
        <span className="rounded-full text-xl  text-white font-bold bg-[#775DA6]/80 w-12 h-12 p-2 text-center">
          {getInitials(assignee)}
        </span>
        {status === "Done" && (
          <span className="text-xs py-1 px-2 bg-[#3fb182] rounded-3xl mt-1 mr-1 text-white">
            Completed
          </span>
        )}
      </div>
    </div>
  );
};

export default Task;
