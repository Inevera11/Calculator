import NumberButton from "./NumberButton";
import MathButton from "./MathButton";
import WorkingButton from "./WorkingButton";
import Window from "./Window";
import styled from "styled-components";
import { useState } from "react";
import { Compute } from "./Compute";

const StyledLine = styled.div`
  margin: 0;
`;
const StyledNumLine = styled.div`
  margin: 0;
  display: grid;
  column-gap: 0.5vh;
  row-gap: 0.5vw;
  grid-template-columns: 7.5vw 7.5vw 7.5vw;
  justify-content: center;
  margin-top: 0;
`;

const BoardStyled = styled.div`
  justify-items: center;
  background-color: #ed4d69c7;
  box-shadow: inset 2px 2px #d96b7ec7;
  border: 5px outset #9d2337c6;
  border-radius: 2%;
  padding: 2vh;
  width: 24vw;
  height: 54vh;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const Board = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState(null);
  const [operation, setOperation] = useState("");
  const [clicked, setClicked] = useState(true);
  const [computed, setComputed] = useState(false);

  const operations = ["-", "+", "x", "/", "%", "="];

  const workingBtn = [
    {
      name: "C",
      onClick: () => {
        setValue1("");
        setValue2(null);
        setOperation("");
        setClicked(true);
        setComputed(false);
      },
    },
    {
      name: ".",
      onClick: () => {
        setComputed(false);
        setClicked(true);
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
              if (operation === "=") {
                setOperation("");
                setValue2(null);
              }
              setValue1(value1 + numberItem);
              setClicked(true);
              setComputed(false);
            }}
          />
        ))}

        {operations.map((sign, index) => (
          <MathButton
            key={index}
            item={sign}
            onClick={() => {
              if (computed) {
                setOperation(sign);
                setClicked(true);
                sign === "=" ? setComputed(true) : setComputed(false);
              }
              if (!clicked) {
                setOperation(sign);
              }
              if (clicked && computed === false) {
                setClicked(false);
                if (sign !== "=") {
                  setOperation(sign);
                }
                if (value2 === null) {
                  if (sign === "-" && value1 === "") {
                    setValue1("-");
                    setOperation("");
                  } else {
                    setValue2(value1);
                    setValue1("");
                  }
                }
                if (value2 !== null) {
                  if (operation === "" && sign !== "=") {
                    setValue2(
                      Compute(
                        sign,
                        parseFloat(value1, 10) ? parseFloat(value1, 10) : 0,
                        parseFloat(value2, 10) ? parseFloat(value2, 10) : 0
                      )
                    );
                    setValue1("");
                  }
                  if (sign === "=") {
                    setComputed(true);
                    setOperation("=");
                  }
                  setValue2(
                    Compute(
                      operation,
                      parseFloat(value1, 10) ? parseFloat(value1, 10) : 0,
                      parseFloat(value2, 10) ? parseFloat(value2, 10) : 0
                    )
                  );
                  setValue1("");
                }
              }
            }}
          />
        ))}
      </StyledNumLine>
    </BoardStyled>
  );
};

export default Board;
