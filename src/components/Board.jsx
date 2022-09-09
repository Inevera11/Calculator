import NumberButton from "./NumberButton";
import MathButton from "./MathButton";
import WorkingButton from "./WorkingButton";
import Window from "./Window";
import styled from "styled-components";
import { useState } from "react";
import { Compute } from "./Compute";

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
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operation, setOperation] = useState("");

  const operations = ["-", "+", "x", "/", "%", "="];

  const workingBtn = [
    {
      name: "on",
      onClick: () => {
        setValue1(null);
        setValue2(null);
        setOperation("");
      },
    },
    {
      name: "off",
      onClick: () => {
        setValue2(null);
        setValue1(null);
        setOperation("");
      },
    },
  ];
  return (
    <BoardStyled>
      <StyledLine>
        <Window value1={value1} value2={value2} />
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
              setValue1(value1 + numberItem);
            }}
          />
        ))}

        {operations.map((sign, index) => (
          <MathButton
            key={index}
            item={sign}
            onClick={() => {
              setOperation(sign);
              console.log(operation);
              if (value2 === "") {
                setValue2(value1);
                setValue1("");
              }
              if (value2) {
                if (operation === "")
                  setValue2(Compute(sign, Number(value1), Number(value2)));
                else
                  setValue2(Compute(operation, Number(value1), Number(value2)));
                setValue1("");
              }
            }}
          />
        ))}
      </StyledNumLine>
    </BoardStyled>
  );
};

export default Board;
