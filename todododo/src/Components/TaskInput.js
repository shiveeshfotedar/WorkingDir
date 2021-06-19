import React from "react";
import styled from "styled-components";

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
      <InputStyle>
        <input type="text" onKeyDown={handleKeyDown}  />
      </InputStyle>
    </div>
  );
};

export default TaskInput;

const InputStyle = styled.div`

  >input{
    width:100%;
    background: #fff;
    box-shadow: inset 0 0px 5px 1px  rgba(0,0,0,0.5);

    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;

    border-radius: 5px; 
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 0px;
    padding-right: 0px;
    font-size:24px;
  

  }

  padding-top: 20px;
  padding-bottom: 20px;

`