import styled from "styled-components";

const StyledFooter = styled.div`
  height: 40px;
  wight: 100%;
  background-color: green;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterMenu = () => {
  console.log("Hello");
  return <StyledFooter>Footer Menu Goes Here</StyledFooter>;
};

export default FooterMenu;
