import styled from "styled-components";

const StyledWindow = styled.span`
  display: block;
  padding: 2vh 14vw;
  margin: 0 auto;
  background-color: white;
  color: black;
`;
const StyledSubWindow = styled.span`
  display: block;
  padding: 2vh 14vw;
  margin: 0 auto;
  background-color: white;
  color: #232020;
`;

const Window = ({ text, subtext, sign }) => {
  return (
    <>
      <StyledWindow>{text}</StyledWindow>
      <StyledSubWindow>
        {subtext}
        {sign}
      </StyledSubWindow>
    </>
  );
};

export default Window;
