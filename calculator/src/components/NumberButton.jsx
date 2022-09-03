import { Button } from "evergreen-ui";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  padding: 2vh;
  font-size: x-large;
`;

const NumberButton = ({ item, onClick }) => {
  return <ButtonStyled onClick={onClick}>{item}</ButtonStyled>;
};

export default NumberButton;
