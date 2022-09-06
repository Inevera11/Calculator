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

const Board = () => {
  const [display, setDisplay] = useState("");
  const [pressable, setPressable] = useState(true);
  const [prevNumber, setPrevNumber] = useState(null);
  const [currNumber, setCurrNumber] = useState(null);
  const [subtext, setSubtext] = useState(0);
  const [sign, setSign] = useState("");
  // TO DO when changing sign -> operacja wykonuje się na wciśnięcie kolejnego klawisza akcji,
  // więc musi zapamiętać poprzedni znak, wykonać przypisaną mu operację,
  // a kolejny  naciśnięty wrzucić do pudełka "kolejny_znak" po czym zamienić je miejscami
  // const [nextSign, setNextSign] = useState(null);
  const operations = [
    { sign: "+" },
    { sign: "-" },
    { sign: "*" },
    { sign: "/" },
    { sign: "%" },
  ];

  const computeOperation = (sign) => {
    setCurrNumber(Number(display));
    console.log("setting currNumber Operation as", { currNumber });
    let result;
    switch (sign) {
      case "+":
        result = currNumber + prevNumber;
        console.log(sign);
        console.log("result");
        console.log(result);
        break;
      case "-":
        result = prevNumber - currNumber;
        console.log(sign);
        console.log("result");
        console.log(result);
        break;
      case "*":
        result = currNumber * prevNumber;
        console.log(sign);
        console.log("result");
        console.log(result);
        break;
      case "/":
        result = prevNumber / currNumber;
        console.log(sign);
        console.log("result");
        console.log(result);
        break;
      case "%":
        result = prevNumber % currNumber;
        console.log(sign);
        console.log("result");
        console.log(result);
        break;
      default:
        console.log("default");
        break;
    }
    setPrevNumber(result);
    console.log("setting prevNumber Operation as", { prevNumber });

    return result;
  };
  useEffect(() => {
    setDisplay("");
  }, [subtext]);

  useEffect(() => {
    if (!pressable) {
      if (prevNumber !== null) {
        setPrevNumber(Number(subtext));
        console.log("setting prevNumber useEffect1 as", { prevNumber });
        setCurrNumber(Number(display));
        console.log("setting currNum useEffect1 ", { currNumber });
        setSubtext(computeOperation(sign));
      }

      if (prevNumber === null) {
        setPrevNumber(Number(display));
        console.log("setting prevNumber useEffect2 as", { prevNumber });
        setSubtext(display + sign);
        console.log("setting subtext useEffect2 as", { subtext });
      }
    }
  }, [pressable]);

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
        setDisplay(computeOperation(sign));
        setSubtext("");
      },
    },
  ];
  return (
    <>
      <StyledLine>
        <Window display={display} subtext={subtext} />
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
              setSign(sign);
              setPressable(false);
            }}
          />
        ))}
      </StyledNumLine>
    </>
  );
};

export default Board;
