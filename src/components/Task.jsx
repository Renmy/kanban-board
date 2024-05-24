/* eslint-disable react/prop-types */
const getInitials = (str) => {
  let initials = str.split(" ");
  return initials[0][0] + initials[1][0];
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

const Task = ({ id, title, assignee, dueDate, priority }) => {
  return (
    <div className="flex justify-center  text-slate-700 bg-slate-100 p-3 rounded-lg shadow-lg hover:shadow-none hover:translate-y-0.5 transition-all">
      <div className="flex flex-col w-3/4 gap-1">
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
      </div>
    </div>
  );
};

export default Task;
