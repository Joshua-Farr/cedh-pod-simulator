import styled from "styled-components";

interface MagicCardProps {
  url: string;
}

const Card = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 100%;
  max-height: 100%;
  border: 2px solid orange;

  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: 0.1s ease-in;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  display: block;
`;

export const MagicCard = (props: MagicCardProps) => {
  return (
    <Card>
      <StyledImage src={props.url} />
    </Card>
  );
};
