import "./App.css";
import Board from "./components/Board";
import styled from "styled-components";

const StyledBoard = styled.button`
  justify-items: center;
`;

function App() {
  return (
    <div className="App">
      <StyledBoard>
        <Board className="App-button"></Board>
      </StyledBoard>
    </div>
  );
}

export default App;
