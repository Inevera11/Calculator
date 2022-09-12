import { Button } from "evergreen-ui";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  padding: 2vh;
  font-size: x-large;
  border: 2px outset #af627f;
  background-color: #e7dde5;
`;

const WorkingButton = ({ item, pressed }) => {
  return <ButtonStyled onClick={pressed}>{item}</ButtonStyled>;
};

export default WorkingButton;
