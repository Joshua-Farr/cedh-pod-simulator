import styled from "styled-components";

interface CardInfoProps {
  name: string;
  price: number;
  set: string;
}

const StyledTile = styled.div`
  border-radius: 15px;
  width: 100%;
  padding: 0.5em 0.35em;
  background-color: #16324f;
  color: white;
  //   border: 2px solid white;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  //   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 10px;
`;

const StyledImage = styled.img`
  max-height: 200 px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  //   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
  //     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  height: 75%;
`;

const StyledCardName = styled.span`
  font-size: 0.875rem;
`;

// const StyledSetInfo = styled.span`
//   font-size: 0.625rem;
// `;

const StyledCardPrice = styled.span`
  font-size: 0.75rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardInfoTile = (props: CardInfoProps) => {
  return (
    <StyledTile>
      <StyledImage src="src/assets/narset.jpg" />
      <StyledContainer>
        <StyledCardName>{props.name}</StyledCardName>
        {/* <StyledSetInfo>{props.set}</StyledSetInfo> */}
        <StyledCardPrice>5 x ${props.price}.00</StyledCardPrice>
      </StyledContainer>
    </StyledTile>
  );
};
