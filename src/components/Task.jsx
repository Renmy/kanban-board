/* eslint-disable react/prop-types */
const Task = ({ id, title, assignee }) => {
  return (
    <div>
      El title del elemento {id} es {title} y esta asignado a {assignee}
    </div>
  );
};

export default Task;
