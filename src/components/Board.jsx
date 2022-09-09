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
  const [value2, setValue2] = useState(null);
  const [operation, setOperation] = useState("");

  const operations = ["-", "+", "x", "/", "%", "="];

  const workingBtn = [
    {
      name: "C",
      onClick: () => {
        setValue1("");
        setValue2(null);
        setOperation("");
      },
    },
    {
      name: ".",
      onClick: () => {
        setValue1(value1 + ".");
      },
    },
  ];
  return (
    <BoardStyled>
      <StyledLine>
        <Window value1={value1} value2={value2} operation={operation} />
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
              if (value2 === null) {
                setValue2(value1);
                if (sign === "-") {
                  setValue1("-");
                  setOperation("");
                }
              }
              if (value2 !== null) {
                if (operation === "")
                  setValue2(
                    Compute(
                      sign,
                      parseFloat(value1) ? parseFloat(value1) : 0,
                      parseFloat(value2) ? parseFloat(value2) : 0
                    )
                  );
                else
                  setValue2(
                    Compute(
                      operation,
                      parseFloat(value1) ? parseFloat(value1) : 0,
                      parseFloat(value2) ? parseFloat(value2) : 0
                    )
                  );
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
