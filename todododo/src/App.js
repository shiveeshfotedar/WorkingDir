import TaskComponent from "./Components/TaskComponent";
import TaskInput from "./Components/TaskInput"
import styled from "styled-components";

function App() {
  return (
    <div>
      <BodyStyle>
        <Lists>
        <TaskInput  />
          <TaskComponent />
        </Lists>
        </BodyStyle>
    </div>
  );
}

export default App;

const Lists = styled.div`

`

const BodyStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 100%;
max-width: 480px;
margin: 0 auto;
padding-left:15px;
padding-right:15px;

`
