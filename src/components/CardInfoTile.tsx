import styled from "styled-components";

import { getCardImage } from "../utils/magicAPI";
import { useEffect, useState } from "react";

interface CardInfoProps {
  name: string;
}

const StyledTile = styled.div`
  border-radius: 15px;
  border: 1px solid white;
  padding: 1.5em 1.35em;
  background-color: #16324f;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  //   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledImage = styled.img`
  // max-height: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  //   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
  //     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  height: 250px;
`;

const StyledCardName = styled.span`
  font-size: 1rem;
  margin-bottom: 1em;
`;

export const CardInfoTile = (props: CardInfoProps) => {
  const [pictureUrl, setPictureUrl] = useState<string | undefined>(undefined);

  const fetchImage = async () => {
    try {
      const url = await getCardImage(`${props.name}`);
      setPictureUrl(url);
    } catch (error) {
      console.error("Trouble fetching image, ", error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [props.name]);

  return (
    <StyledTile>
      <StyledCardName>{props.name}</StyledCardName>
      {pictureUrl && <StyledImage src={pictureUrl} />}
    </StyledTile>
  );
};
