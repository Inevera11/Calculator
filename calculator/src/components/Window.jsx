import styled from "styled-components";

const StyledWindow = styled.button`
  display: block;
  padding: 2vh 14vw;
  margin: 0 auto;
  background-color: white;
  color: black;
`;

const Window = ({ text }) => {
  return <StyledWindow>{text}</StyledWindow>;
};

export default Window;
