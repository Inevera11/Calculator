import { Button } from "evergreen-ui";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  padding: 2vh;
  font-size: x-large;
  border: 2px outset #af627f;
  background-color: #e7dde5;
  transition: ease-in-out;
`;

const MathButton = ({ item, onClick }) => {
  return <ButtonStyled onClick={onClick}>{item}</ButtonStyled>;
};

export default MathButton;
