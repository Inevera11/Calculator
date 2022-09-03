import { Button } from "evergreen-ui";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  padding: 2vh;
  font-size: x-large;
`;

const WorkingButton = ({ item, pressed }) => {
  return <ButtonStyled onClick={pressed}>{item}</ButtonStyled>;
};

export default WorkingButton;
