import TaskComponent from "./Components/TaskComponent";
import TaskInput from "./Components/TaskInput"
import styled from "styled-components";

function App() {
  return (
    <div>
      <Lists>
        <TaskInput  />
        <TaskComponent />
        <TaskComponent />
        <TaskComponent />
      </Lists>
    </div>
  );
}

export default App;

const Lists = styled.div``;
