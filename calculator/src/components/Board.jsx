import NumberButton from "./NumberButton";
import MathButton from "./MathButton";
import WorkingButton from "./WorkingButton";
import Window from "./Window";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledLine = styled.p`
  margin: 0;
`;

const Board = () => {
  const [equation, setEquation] = useState({
    text: "",
    pressableKey: true,
    subtext: 0,
    sign: "",
  });

  useEffect(() => {
    if (equation.pressableKey === true) {
      switch (equation.sign) {
        default:
          break;
        case "+":
          setEquation({
            subtext: Number(equation.text) + equation.subtext,
            sign: "",
            text: "",
          });
          break;
        case "-":
          setEquation({
            subtext: equation.subtext - Number(equation.text),
            sign: "",
            text: "",
          });
          break;
        case "/":
          setEquation({
            subtext: equation.subtext / Number(equation.text),
            sign: "",
            text: "",
          });
          break;
        case "x":
          setEquation({
            subtext: Number(equation.text) * equation.subtext,
            sign: "",
            text: "",
          });
          break;
        case "%":
          setEquation({
            subtext: equation.subtext % Number(equation.text),
            sign: "",
            text: "",
          });
          break;
      }
    }
  }, [equation]);
  return (
    <>
      <StyledLine>
        <Window
          text={equation.text}
          subtext={equation.subtext}
          sign={equation.sign}
        />
      </StyledLine>
      <StyledLine>
        <WorkingButton
          key={11}
          item={"on"}
          pressed={() => {
            setEquation({
              text: "",
              pressableKey: true,
              subtext: 0,
              sign: "",
            });
          }}
        />
        <WorkingButton
          key={12}
          item={"off"}
          pressed={() => {
            setEquation({
              text: "",
              pressableKey: true,
              subtext: 0,
              sign: "",
            });
          }}
        />
        <MathButton
          key={17}
          item={"="}
          onClick={() => alert("Nic jeszcze nie umiem")}
        />
      </StyledLine>
      <StyledLine>
        <NumberButton
          key={1}
          item={1}
          onClick={() => {
            setEquation({
              text: equation.text + 1,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
        <NumberButton
          key={2}
          item={2}
          onClick={() => {
            setEquation({
              text: equation.text + 2,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
        <NumberButton
          key={3}
          item={3}
          onClick={() => {
            setEquation({
              text: equation.text + 3,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
      </StyledLine>
      <StyledLine>
        <NumberButton
          key={4}
          item={4}
          onClick={() => {
            setEquation({
              text: equation.text + 4,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
        <NumberButton
          key={5}
          item={5}
          onClick={() => {
            setEquation({
              text: equation.text + 5,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
        <NumberButton
          key={6}
          item={6}
          onClick={() => {
            setEquation({
              text: equation.text + 6,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
      </StyledLine>
      <StyledLine>
        <NumberButton
          key={7}
          item={7}
          onClick={() => {
            setEquation({
              text: equation.text + 7,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
        <NumberButton
          key={8}
          item={8}
          onClick={() => {
            setEquation({
              text: equation.text + 8,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
        <NumberButton
          key={9}
          item={9}
          onClick={() => {
            setEquation({
              text: equation.text + 9,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
      </StyledLine>
      <StyledLine>
        <NumberButton
          key={0}
          item={0}
          onClick={() => {
            setEquation({
              text: equation.text + 0,
              pressableKey: true,
              subtext: equation.subtext,
              sign: equation.sign,
            });
          }}
        />
        <MathButton
          key={13}
          item={"+"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    subtext: Number(equation.text),
                    sign: "+",
                    pressableKey: false,
                    text: "",
                  });
                }
              : () =>
                  setEquation({
                    text: equation.text,
                    pressableKey: false,
                    subtext: equation.subtext,
                    sign: equation.sign,
                  })
          }
        />
        <MathButton
          key={14}
          item={"-"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    subtext: Number(equation.text),
                    sign: "-",
                    pressableKey: false,
                    text: "",
                  });
                }
              : () =>
                  setEquation({
                    text: equation.text,
                    pressableKey: false,
                    subtext: equation.subtext,
                    sign: equation.sign,
                  })
          }
        />
      </StyledLine>
      <StyledLine>
        <MathButton
          key={16}
          item={"x"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    subtext: Number(equation.text),
                    sign: "x",
                    pressableKey: false,
                    text: "",
                  });
                }
              : () =>
                  setEquation({
                    text: equation.text,
                    pressableKey: false,
                    subtext: equation.subtext,
                    sign: equation.sign,
                  })
          }
        />
        <MathButton
          key={15}
          item={"/"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    subtext: Number(equation.text),
                    sign: "/",
                    pressableKey: false,
                    text: "",
                  });
                }
              : () =>
                  setEquation({
                    text: equation.text,
                    pressableKey: false,
                    subtext: equation.subtext,
                    sign: equation.sign,
                  })
          }
        />
        <MathButton
          key={18}
          item={"%"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    subtext: Number(equation.text),
                    sign: "%",
                    pressableKey: false,
                    text: equation.text,
                  });
                }
              : () =>
                  setEquation({
                    text: equation.text,
                    pressableKey: false,
                    subtext: equation.subtext,
                    sign: equation.sign,
                  })
          }
        />
      </StyledLine>
    </>
  );
};

export default Board;
