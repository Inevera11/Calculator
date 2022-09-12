import "./App.css";
import Board from "./components/Board";
import styled from "styled-components";

const Title = styled.h1`
  color: #d8ced9d1;
  margin: 4vh;
  text-shadow: 20px -17px 3px black;
`;

function App() {
  return (
    <>
      <Title>Welcome ( ͡° ͜ʖ ͡°)</Title>
      <Board />
    </>
  );
}

export default App;
