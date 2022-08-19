import NumberButton from "./NumberButton";
import MathButton from "./MathButton";
import WorkingButton from "./WorkingButton";
import Window from "./Window";
import styled from "styled-components";

const StyledLine = styled.h1`
  margin: 0;
`;

const Board = () => {
  return (
    <>
      <StyledLine>
        <Window />
      </StyledLine>
      <StyledLine>
        <WorkingButton key={11} item={"on"} />
        <WorkingButton key={12} item={"off"} />
        <NumberButton key={0} item={0} />
      </StyledLine>
      <StyledLine>
        <NumberButton key={1} item={1} />
        <NumberButton key={2} item={2} />
        <NumberButton key={3} item={3} />
      </StyledLine>
      <StyledLine>
        <NumberButton key={4} item={4} />
        <NumberButton key={5} item={4} />
        <NumberButton key={6} item={6} />
      </StyledLine>
      <StyledLine>
        <NumberButton key={7} item={7} />
        <NumberButton key={8} item={8} />
        <NumberButton key={9} item={9} />
      </StyledLine>
      <StyledLine>
        <MathButton key={13} item={"+"} />
        <MathButton key={14} item={"-"} />
        <MathButton key={15} item={"/"} />
      </StyledLine>
      <StyledLine>
        <MathButton key={16} item={"x"} />
        <MathButton key={18} item={"%"} />
        <MathButton key={17} item={"="} />
      </StyledLine>
    </>
  );
};

export default Board;
