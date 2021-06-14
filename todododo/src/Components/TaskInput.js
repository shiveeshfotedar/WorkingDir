import React from "react";

function handleKeyDown(e) {
  if (e.key === "Enter") {
    console.log("do validate");
    console.log(e.target.value);
    //console.log(e.target);
    e.target.Text = String.Empty;
  }
}

const TaskInput = () => {
  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default TaskInput;
