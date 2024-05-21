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
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 210px;
  border-radius: 10px;
  display: block;
  object-fit: cover;
`;

export const MagicCard = (props: MagicCardProps) => {
  return (
    <Card>
      <StyledImage src={props.url} />
    </Card>
  );
};
