import styled from "styled-components";

interface MagicCardProps {
  url: string;
}

const Card = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  height: 100%;
  // border: 2px solid orange;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: 0.1s ease-in;
  }

  @media only screen and (max-width: 750px) {
    &:hover {
      border-radius: 6px;
      // position: fixed;      
      transform: scale(2);
    }
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 210px;
  border-radius: 10px;
  display: block;
  object-fit: cover;

  @media only screen and (max-width: 750px) {
    border-radius: 2px;
  }
`;

export const MagicCard = (props: MagicCardProps) => {
  return (
    <Card>
      <StyledImage src={props.url} />
    </Card>
  );
};
