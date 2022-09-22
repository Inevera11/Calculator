import styled from "styled-components";
import { TextInput } from "evergreen-ui";

const StyledWindow = styled.span`
  display: flex;
  margin: 0 auto;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-evenly;
  color: rosybrown;
  border-style: inset;
  border-radius: 8px;
`;

const StyledInput = styled(TextInput)`
  color: rosybrown;
  border: aliceblue;
  width: auto;
  border-radius: 0;
  height: 6vh;
  font-size: x-large;
  font-weight: 500;
  &:focus {
    box-shadow: none;
  }
`;
const StyledSubInput = styled(TextInput)`
  color: rosybrown;
  border: aliceblue;
  width: auto;
  border-radius: 0;
  height: 5vh;
  font-size: x-large;
  font-weight: 500;
  &:focus {
    box-shadow: none;
  }
`;

const Window = ({ value1, value2, operation }) => {
  return (
    <>
      <StyledWindow>
        <StyledInput
          name="display"
          placeholder="0"
          value={
            value1[0] === "-" ? operation + "(" + value1 : operation + value1
          }
          readOnly
        />
        <StyledSubInput
          name="subtext"
          placeholder="0"
          value={value2 ? value2 : 0}
          readOnly
        />
      </StyledWindow>
    </>
  );
};

export default Window;
