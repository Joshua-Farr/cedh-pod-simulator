import styled from "styled-components";
import { formatNameForDisplay } from "../utils/formatNameForDisplay";
import { useEffect, useState } from "react";

interface CardInfoProps {
  commanders: string | string[];
  index: number;
  listOfUrls: any[];
  loading: boolean;
  setLoading: (status: boolean) => void;
}

const StyledTile = styled.div`
  border-radius: 15px;
  border: 1px solid white;
  padding: 1.5em 1.35em;
  background-color: #16324f;

  min-height: 100%;

  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  object-fit: contain;

  &:hover {
    cursor: pointer;
    // transform: scale(1.08);
    transform: scale(1.08);
    transition: 0.1s ease-in;
  }
`;

const ImageWrapper = styled.div``;

const StyledImage = styled.img<{ $pair?: boolean }>`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-height: 250px;
  pointer-events: none;
  max-width: ${(props) => (props.$pair ? "48%" : "100%")};
  width: auto;
  height: auto;
`;

const StyledCardName = styled.span`
  font-size: 1rem;
  margin-bottom: 1em;
`;

const CommanderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  // flex-basis: auto
  // max-width: 250px;
  // border: 2px solid pink;
  object-fit: contain;
`;

export const CommanderTile = (props: CardInfoProps) => {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoaded = () => {
    setImageLoading(false);
  };

  useEffect(() => {
    setImageLoading(false);
  }, [props.commanders, props.index]);

  let commanderImages: any[] = [];

  if (Array.isArray(props.commanders)) {
    let imageUrl1 = "";
    let imageUrl2 = "";

    if (props.listOfUrls[props.index]) {
      imageUrl1 = props.listOfUrls[props.index][0] || "";
      imageUrl2 = props.listOfUrls[props.index][1] || "";
    }
    const imageUrls = [imageUrl1, imageUrl2];

    imageUrls.forEach((image) => {
      const randomNumber = Math.floor(Math.random() * 10000000000);

      commanderImages.push(
        <StyledImage
          $pair
          src={imageLoading ? "src/assets/cardback.jpg" : image}
          alt={`Commander Image ${image}`}
          key={randomNumber}
          onLoad={handleImageLoaded}
        />
      );
    });
  } else {
    const imageUrl = props.listOfUrls[props.index];
    const randomNumber = Math.floor(Math.random() * 10000000000);
    commanderImages.push(
      <StyledImage
        src={imageLoading ? "src/assets/cardback.jpg" : imageUrl}
        alt={`Commander Image ${imageUrl}`}
        key={randomNumber}
        onLoad={handleImageLoaded}
      />
    );
  }

  return (
    <>
      {props.loading ? (
        <StyledTile>
          <StyledCardName>Loading Commander...</StyledCardName>
          <StyledImage
            src={"src/assets/cardback.jpg"}
            alt={`Commander is loading!`}
          />
        </StyledTile>
      ) : (
        <StyledTile>
          {typeof props.commanders === "string" ? (
            <StyledCardName>
              {formatNameForDisplay(props.commanders)}
            </StyledCardName>
          ) : (
            <StyledCardName>
              {formatNameForDisplay(props.commanders)}
            </StyledCardName>
          )}
          <ImageWrapper>
            <CommanderWrapper>{commanderImages}</CommanderWrapper>
          </ImageWrapper>
        </StyledTile>
      )}
    </>
  );
};
