import NumberButton from "./NumberButton";
import MathButton from "./MathButton";
import WorkingButton from "./WorkingButton";
import Window from "./Window";
import styled from "styled-components";
import { useState } from "react";

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

const Board = () => {
  const [display, setDisplay] = useState("");
  const [pressable, setPressable] = useState(true);
  const [prevNumber, setPrevNumber] = useState(null);
  const [currNumber, setCurrNumber] = useState(null);
  const [subtext, setSubtext] = useState(0);
  const [sign, setSign] = useState("");
  const [nextSign, setNextSign] = useState(null);
  const operations = [
    { sign: "+", onClick: () => {} },
    { sign: "-", onClick: () => {} },
    { sign: "*", onClick: () => {} },
    { sign: "/", onClick: () => {} },
    { sign: "%", onClick: () => {} },
  ];

  const computeOperation = () => {
    let result;
    switch (sign) {
      case "+":
        result = currNumber + prevNumber;
        console.log("result");
        console.log(result);
        console.log("subtext");
        console.log(subtext);
        break;
      case "-":
        result = prevNumber - currNumber;
        break;
      case "*":
        result = currNumber * prevNumber;
        break;
      case "/":
        result = prevNumber / currNumber;
        break;
      case "%":
        result = prevNumber % currNumber;
        break;
      default:
        console.log("default");
        break;
    }
    setPrevNumber(result);
    setSubtext(result);
    setSign(nextSign);
    // setNextSign(null);
    setDisplay("");
  };

  const workingBtn = [
    {
      name: "on",
      onClick: () => {
        setDisplay("");
        setCurrNumber(null);
        setPrevNumber(null);
        setSign("");
        setSubtext(0);
        setPressable(true);
      },
    },
    {
      name: "off",
      onClick: () => {
        setCurrNumber(null);
        setPrevNumber(null);
        setDisplay("");
        setSign("");
        setSubtext(0);
        setPressable(true);
      },
    },
    {
      name: "=",
      onClick: () => {
        setDisplay(subtext.toString());
        setSubtext("");
      },
    },
  ];
  return (
    <>
      <StyledLine>
        <Window display={display} subtext={subtext} sign={sign} />
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
              setDisplay(display + numberItem);
              setPressable(true);
            }}
          />
        ))}

        {operations.map(({ sign }, index) => (
          <MathButton
            key={index}
            item={sign}
            onClick={() => {
              if (pressable) {
                if (prevNumber !== null) {
                  setCurrNumber(Number(display));
                  setNextSign(sign);
                  computeOperation();
                }
                if (prevNumber === null) {
                  setPrevNumber(Number(display));
                  setSubtext(Number(display));
                  setDisplay("");
                  setSign(sign);
                }
              }
              setPressable(false);
            }}
          />
        ))}
      </StyledNumLine>
    </>
  );
};

export default Board;
