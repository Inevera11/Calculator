import NumberButton from "./NumberButton";
import MathButton from "./MathButton";
import WorkingButton from "./WorkingButton";
import Window from "./Window";
import styled from "styled-components";
import { useState } from "react";

const StyledLine = styled.p`
  margin: 0;
`;

const Board = () => {
  const [equation, setEquation] = useState({ text: "", pressableKey: true });
  return (
    <>
      <StyledLine>
        <Window text={equation.text} />
      </StyledLine>
      <StyledLine>
        <WorkingButton
          key={11}
          item={"on"}
          pressed={() => {
            setEquation({ text: "", pressableKey: true });
          }}
        />
        <WorkingButton
          key={12}
          item={"off"}
          pressed={() => {
            setEquation({ text: "", pressableKey: true });
          }}
        />
        <MathButton key={17} item={"="} />
      </StyledLine>
      <StyledLine>
        <NumberButton
          key={1}
          item={1}
          onClick={() => {
            setEquation({ text: equation.text + 1, pressableKey: true });
          }}
        />
        <NumberButton
          key={2}
          item={2}
          onClick={() => {
            setEquation({ text: equation.text + 2, pressableKey: true });
          }}
        />
        <NumberButton
          key={3}
          item={3}
          onClick={() => {
            setEquation({ text: equation.text + 3, pressableKey: true });
          }}
        />
      </StyledLine>
      <StyledLine>
        <NumberButton
          key={4}
          item={4}
          onClick={() => {
            setEquation({ text: equation.text + 4, pressableKey: true });
          }}
        />
        <NumberButton
          key={5}
          item={5}
          onClick={() => {
            setEquation({ text: equation.text + 5, pressableKey: true });
          }}
        />
        <NumberButton
          key={6}
          item={6}
          onClick={() => {
            setEquation({ text: equation.text + 6, pressableKey: true });
          }}
        />
      </StyledLine>
      <StyledLine>
        <NumberButton
          key={7}
          item={7}
          onClick={() => {
            setEquation({ text: equation.text + 7, pressableKey: true });
          }}
        />
        <NumberButton
          key={8}
          item={8}
          onClick={() => {
            setEquation({ text: equation.text + 8, pressableKey: true });
          }}
        />
        <NumberButton
          key={9}
          item={9}
          onClick={() => {
            setEquation({ text: equation.text + 9, pressableKey: true });
          }}
        />
      </StyledLine>
      <StyledLine>
        <NumberButton
          key={0}
          item={0}
          onClick={() => {
            setEquation({ text: equation.text + 0, pressableKey: true });
          }}
        />
        <MathButton
          key={13}
          item={"+"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    text: equation.text + "+",
                    pressableKey: false,
                  });
                }
              : () => setEquation({ text: equation.text, pressableKey: false })
          }
        />
        <MathButton
          key={14}
          item={"-"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    text: equation.text + "-",
                    pressableKey: false,
                  });
                }
              : () => setEquation({ text: equation.text, pressableKey: false })
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
                    text: equation.text + "x",
                    pressableKey: false,
                  });
                }
              : () => setEquation({ text: equation.text, pressableKey: false })
          }
        />
        <MathButton
          key={15}
          item={"/"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    text: equation.text + "/",
                    pressableKey: false,
                  });
                }
              : () => setEquation({ text: equation.text, pressableKey: false })
          }
        />
        <MathButton
          key={18}
          item={"%"}
          onClick={
            equation.pressableKey
              ? () => {
                  setEquation({
                    text: equation.text + "%",
                    pressableKey: false,
                  });
                }
              : () => setEquation({ text: equation.text, pressableKey: false })
          }
        />
      </StyledLine>
    </>
  );
};

export default Board;
