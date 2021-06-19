import React from "react";
import styled from "styled-components";

const TaskComponent = () => {
  return (
    <div>
      <Taskbox>
        <h1>This is a task</h1>
        <button>Done</button>
        <button>Delete</button>
      </Taskbox>
    </div>
  );
};

export default TaskComponent;

const Taskbox = styled.div`
  display: flex;
  background: #DAF2F5 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  opacity: 1;
  padding: 2%;
  text-align: left;
  font: normal normal normal 10px/16px Helvetica Neue;
  letter-spacing: 0px;
  color: #707070;

  justify-content: space-between;

  > h1{
    float: right;
  }

  > button{
      background-color:rgba(0, 0, 0, 0.0);
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 5px;
      margin-left: auto;
      border: none;
      color: #707070;
      padding: 5px 5px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
  }
  >button:active { 
    background-color:hsl(283, 100%, 86%);

    box-shadow: inset 0 0px 3px 1px  rgba(0,0,0,0.3);

   }
`;
