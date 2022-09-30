import DisplayButton from "./DisplayButton";
import MathButton from "./MathButton";
import Window from "./Window";
import styled from "styled-components";
import { useState } from "react";
import HandleMathButton from "./HandleMathButton";

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
  const [value2, setValue2] = useState("");
  const [operation, setOperation] = useState("");
  const [clickable, setClickable] = useState(true);

  const getResult = (sign) => {
    if (value1 === "") {
      setOperation(sign);
      return;
    }
    if (operation !== "=") {
      operation === ""
        ? setValue2(value1)
        : setValue2(HandleMathButton(operation, value1, value2));
      setOperation(sign);
      setClickable(true);
      setValue1("");
    } else {
      setValue2(HandleMathButton(sign, value1, value2));
      setOperation(sign);
      setClickable(true);
      setValue1("");
    }
  };

  const displayBtn = [
    {
      name: "C",
      onClick: () => {
        setValue1("");
        setValue2(null);
        setOperation("");
        setClickable(true);
      },
    },
    {
      name: ".",
      onClick: () => {
        if (value1.indexOf(".") === -1) {
          setClickable(false);
          if (value1 === "") setValue1("0.");
          else if (value1 === "-") setValue1("-0.");
          else setValue1(value1 + ".");
          if (operation === "=") {
            setOperation("");
            setValue2(null);
          }
        }
      },
    },
  ];
  return (
    <BoardStyled>
      <StyledLine>
        <Window value1={value1} value2={value2} operation={operation} />
      </StyledLine>
      <StyledNumLine>
        {displayBtn.map(({ name, onClick }, index) => (
          <DisplayButton
            key={`operations${index}`}
            item={name}
            onClick={onClick}
          />
        ))}
        {[...Array(10).keys()].map((numberItem) => (
          <DisplayButton
            key={`number${numberItem}`}
            item={numberItem}
            onClick={() => {
              if (value1 === "") setClickable(false);
              if (operation === "=") {
                setOperation("");
                setValue2(null);
              }
              setValue1(value1 + numberItem);
            }}
          />
        ))}
        <MathButton
          key={1}
          item={"-"}
          onClick={
            clickable && operation !== "="
              ? () => {
                  setValue1("-");
                  setClickable(false);
                }
              : () => {
                  getResult("-");
                }
          }
        />
        <MathButton
          key={2}
          item={"+"}
          onClick={() => {
            getResult("+");
          }}
        />
        <MathButton
          key={3}
          item={"x"}
          onClick={() => {
            getResult("x");
          }}
        />
        <MathButton
          key={4}
          item={"/"}
          onClick={() => {
            getResult("/");
          }}
        />
        <MathButton
          key={5}
          item={"%"}
          onClick={() => {
            getResult("%");
          }}
        />
        <MathButton
          key={6}
          item={"="}
          onClick={() => {
            getResult("=");
          }}
        />
      </StyledNumLine>
    </BoardStyled>
  );
};

export default Board;
