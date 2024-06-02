import styled from "styled-components";
import { formatNameForDisplay } from "../utils/formatNameForDisplay";
import { useContext, useEffect, useState } from "react";
import { CommanderContext } from "../App";

interface CardInfoProps {
  commanders: string | string[];
  index: number;
  listOfUrls: any[];
  loading: boolean;
  setLoading: (status: boolean) => void;
  getHighlightedCommanderStatus: () => boolean;
  setHighlightPlayerCommanderStatus: (status: boolean) => void;
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

  @media only screen and (max-width: 750px) {
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    gap: 0em;
    padding: 0.5em;
    height: 30vh;
    // justify-content: space-between;
  }
`;

const StyledCommanderTile = styled.div`
  background-color: #343330;

  border-radius: 15px;
  border: 1px solid white;
  padding: 1.5em 1.35em;

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

  @media only screen and (max-width: 750px) {
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    gap: 0em;
    padding: 0.5em;
    height: 30vh;
    // justify-content: space-between;
  }
`;

const ImageWrapper = styled.div`
  @media only screen and (max-width: 750px) {
    height: 70%;
  }
`;

const StyledImage = styled.img<{ $pair?: boolean }>`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-height: 250px;
  pointer-events: none;
  max-width: ${(props) => (props.$pair ? "48%" : "100%")};
  width: auto;
  height: auto;

  @media only screen and (max-width: 750px) {
    max-height: 100%;
    max-width: ${(props) => (props.$pair ? "48%" : "100%")};
  }
`;

const StyledCardName = styled.span`
  font-size: 1rem;
  margin-bottom: 1em;

  @media only screen and (max-width: 750px) {
    font-size: 0.75rem;
    margin-bottom: 0.3em;
  }
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
  @media only screen and (max-width: 750px) {
    height: 100%;
  }
`;

export const CommanderTile = (props: CardInfoProps) => {
  const { commanderSettings } = useContext(CommanderContext);

  const [imageLoading, setImageLoading] = useState(true);

  const myCommanderStatus = props.getHighlightedCommanderStatus();

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
          src={imageLoading ? "/cardback.jpg" : image}
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
        src={imageLoading ? "/cardback.jpg" : imageUrl}
        alt={`Commander Image ${imageUrl}`}
        key={randomNumber}
        onLoad={handleImageLoaded}
      />
    );
  }

  console.log(
    `Does ${props.commanders} equal ${commanderSettings.commander}? `,
    props.commanders === commanderSettings.commander
  );
  return (
    <>
      {/* {props.loading ? (
        <StyledTile>
          <StyledCardName>Loading Commander...</StyledCardName>
          <StyledImage src={"/cardback.jpg"} alt={`Commander is loading!`} />
        </StyledTile> */}

      {props.commanders === commanderSettings.commander &&
      !myCommanderStatus ? (
        <StyledCommanderTile>
          {typeof props.commanders === "string" ? (
            <StyledCardName>
              {props.index + 1 + ". "}
              {formatNameForDisplay(props.commanders)}
            </StyledCardName>
          ) : (
            <StyledCardName>
              {props.index + 1 + ". "}
              {formatNameForDisplay(props.commanders)}
            </StyledCardName>
          )}
          <ImageWrapper>
            <CommanderWrapper>{commanderImages}</CommanderWrapper>
          </ImageWrapper>
        </StyledCommanderTile>
      ) : (
        <StyledTile>
          {typeof props.commanders === "string" ? (
            <StyledCardName>
              {props.index + 1 + ". "}
              {formatNameForDisplay(props.commanders)}
            </StyledCardName>
          ) : (
            <StyledCardName>
              {props.index + 1 + ". "}
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
