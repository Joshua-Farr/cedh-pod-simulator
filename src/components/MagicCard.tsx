import styled from "styled-components";

interface MagicCardProps {
  url: string ;
}

const Card = styled.img`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 200px;

  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: 0.1s ease-in;
  }
`;

export const MagicCard = (props: MagicCardProps) => {
  return <Card src={props.url} />;
};
