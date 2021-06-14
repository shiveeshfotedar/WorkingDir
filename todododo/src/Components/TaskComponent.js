import React from "react";
import styled from "styled-components";

const TaskComponent = () => {
  return (
    <div>
      <Taskbox>
        <h1>This is a task</h1>
        <button>V</button>
        <button>X</button>
      </Taskbox>
    </div>
  );
};

export default TaskComponent;

const Taskbox = styled.div`
  display: flex;
  border: 2px solid red;
  //padding: 10px;
  border-radius: 25px;
  width: 50%;
  justify-content: space-between;
  > h1 {
    color: red;
  }
  > button {
    background-color: green;
  }
`;
