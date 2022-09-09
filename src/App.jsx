import "./App.css";
import Board from "./components/Board";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  margin: 4vh;
`;

function App() {
  return (
    <>
      <Title>Welcome</Title>
      <Board />
    </>
  );
}

export default App;
