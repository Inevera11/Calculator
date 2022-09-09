import NumberButton from "./NumberButton";
import MathButton from "./MathButton";
import WorkingButton from "./WorkingButton";
import Window from "./Window";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledLine = styled.p`
  margin: 0;
`;
const StyledNumLine = styled.p`
  margin: 0;
  display: grid;
  column-gap: 2px;
  row-gap: 2px;
  grid-template-columns: 11vw 11vw 11vw;
  justify-content: center;
  margin-top: 0;
`;

const BoardStyled = styled.div`
  justify-items: center;
  background-color: pink;
  border: 10px solid black;
  padding: 2vh;
  width: 35vw;
  height: 45vh;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const Board = () => {
  const [prevNumber, setPrevNumber] = useState("");
  const [currNumber, setCurrNumber] = useState("");
  const [sign, setSign] = useState("");
  const [nextSign, seNextSign] = useState("");

  const operations = ["-", "+", "x", "/", "%", "="];

  const workingBtn = [
    {
      name: "on",
      onClick: () => {
        setCurrNumber(null);
        setPrevNumber(null);
        setSign("");
      },
    },
    {
      name: "off",
      onClick: () => {
        setCurrNumber(null);
        setPrevNumber(null);
        setSign("");
      },
    },
  ];
  return (
    <BoardStyled>
      <StyledLine>
        <Window prevNumber={prevNumber} currNumber={currNumber} />
      </StyledLine>
      <StyledNumLine>
        {workingBtn.map(({ name, onClick }, index) => (
          <WorkingButton key={index} item={name} pressed={onClick} />
        ))}
        {[...Array(10).keys()].map((numberItem) => (
          <NumberButton
            key={numberItem}
            item={numberItem}
            onClick={() => {
              setPrevNumber(prevNumber + numberItem);
            }}
          />
        ))}

        {operations.map((sign, index) => (
          <MathButton
            key={index}
            item={sign}
            onClick={() => {
              setSign(sign);
            }}
          />
        ))}
      </StyledNumLine>
    </BoardStyled>
  );
};

export default Board;
