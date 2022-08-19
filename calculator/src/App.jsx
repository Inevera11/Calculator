import "./App.css";
import Board from "./components/Board";
import styled from "styled-components";

const StyledBoard = styled.h1`
  justify-items: center;
  background-color: pink;
  border: 10px solid black;
  padding: 2vh;
  width: 30vw;
  margin: auto;
`;

const Title = styled.h1`
  color: white;
  margin: 4vh;
`;

function App() {
  return (
    <>
      <Title>Welcome</Title>
      <StyledBoard>
        <Board />
      </StyledBoard>
    </>
  );
}

export default App;
