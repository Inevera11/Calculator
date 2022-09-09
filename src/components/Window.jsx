import styled from "styled-components";
import { TextInput } from "evergreen-ui";

const StyledWindow = styled.span`
  display: flex;
  margin: 0 auto;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-evenly;
  color: rosybrown;
`;

const StyledInput = styled(TextInput)`
  color: rosybrown;
  border: aliceblue;
  width: auto;
  border-radius: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 5vh;
  font-size: x-large;
`;
const StyledSubInput = styled(TextInput)`
  color: rosybrown;
  border: aliceblue;
  width: auto;
  border-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 5vh;
  font-size: x-large;
`;

const Window = ({ value1, value2 }) => {
  return (
    <>
      <StyledWindow>
        <StyledInput name="display" placeholder="0" value={value1} readOnly />
        <StyledSubInput
          name="subtext"
          placeholder="0"
          value={value2}
          readOnly
        />
      </StyledWindow>
    </>
  );
};

export default Window;