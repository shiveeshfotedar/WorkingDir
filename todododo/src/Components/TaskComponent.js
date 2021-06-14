import React from "react";
import styled from "styled-components";

const TaskComponent = () => {
  return (
    <div>
      <Taskbox>this is a task</Taskbox>
    </div>
  );
};

export default TaskComponent;

const Taskbox = styled.div`
  background-color: blue;
`;
