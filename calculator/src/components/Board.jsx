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
  const [text, setText] = useState("");
  return (
    <>
      <StyledLine>
        <Window text={text} />
      </StyledLine>
      <StyledLine>
        <WorkingButton
          key={11}
          item={"on"}
          pressed={() => {
            setText("");
          }}
        />
        <WorkingButton
          key={12}
          item={"off"}
          pressed={() => {
            setText("");
          }}
        />
        <MathButton key={17} item={"="} />
      </StyledLine>
      <StyledLine>
        <NumberButton key={1} item={1} text={text} setText={setText} />
        <NumberButton key={2} item={2} text={text} setText={setText} />
        <NumberButton key={3} item={3} text={text} setText={setText} />
      </StyledLine>
      <StyledLine>
        <NumberButton key={4} item={4} text={text} setText={setText} />
        <NumberButton key={5} item={5} text={text} setText={setText} />
        <NumberButton key={6} item={6} text={text} setText={setText} />
      </StyledLine>
      <StyledLine>
        <NumberButton key={7} item={7} text={text} setText={setText} />
        <NumberButton key={8} item={8} text={text} setText={setText} />
        <NumberButton key={9} item={9} text={text} setText={setText} />
      </StyledLine>
      <StyledLine>
        <NumberButton key={0} item={0} text={text} setText={setText} />
        <NumberButton key={13} item={"+"} text={text} setText={setText} />
        <NumberButton key={14} item={"-"} text={text} setText={setText} />
      </StyledLine>
      <StyledLine>
        <NumberButton key={16} item={"x"} />
        <NumberButton key={15} item={"/"} />
        <NumberButton key={18} item={"%"} />
      </StyledLine>
    </>
  );
};

export default Board;
