import styled from "styled-components";
import { formatNameForDisplay } from "../utils/formatNameForDisplay";
import { useState, useContext } from "react";
import { CommanderContext } from "../App";

interface CardInfoProps {
  commanders: string | string[];
  index: number;
  listOfUrls: any[];
  loading: boolean;
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
  user-select: none;
  object-fit: contain;

  &:hover {
    cursor: pointer;
    // transform: scale(1.08);
    transform: scale(1.08);
    transition: 0.1s ease-in;
  }
`;

const StyledCommander = styled(StyledTile)`
  background-color: #343330;
`;

const ImageWrapper = styled.div`
  // border: 2px solid green;
`;

const StyledImage = styled.img`
  // max-height: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  //   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
  //     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  height: 250px;
  pointer-events: none;
`;

const StyledCardName = styled.span`
  font-size: 1rem;
  margin-bottom: 1em;
`;

const CommanderWrapper = styled.div`
  display: flex;
  gap: 5px;
  // max-width: 250px;
  // border: 2px solid green;
`;

export const CommanderTile = (props: CardInfoProps) => {
  // const isItMyCommander = (): boolean => {
  //   const currentCommander =
  //     useContext(CommanderContext).commanderSettings.commander;

  //   if (
  //     currentCommander === formatNameForDisplay(props.commanders[props.index])
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  // const fetchImages = async () => {
  //   let temp: string | string[] = props.name || [];

  //   try {
  //     if (Array.isArray(temp)) {
  //       const results = await Promise.allSettled(
  //         temp.map(async (name) => await getCardImage(name))
  //       );
  //       const images = results
  //         .filter((result) => result.status === "fulfilled")
  //         .map(
  //           (result) =>
  //             (result as PromiseFulfilledResult<string | undefined>).value
  //         )
  //         .filter((value) => value !== undefined) as string[];

  //       setPictureUrl(images);
  //     } else {
  //       // If props.name is a single string, fetch the image for that string
  //       const image = await getCardImage(temp);
  //       setPictureUrl(image ? [image] : []);
  //     }
  //   } catch (error) {
  //     console.error(`Trouble fetching ${temp}'s image: , `, error);
  //   }
  // };
  // useEffect(() => {
  //   fetchImages();
  // }, [props.name]);

  let commanderImages: any[] = [];

  if (Array.isArray(props.listOfUrls[props.index])) {
    const imageUrls = [
      props.listOfUrls[props.index][0],
      props.listOfUrls[props.index][1],
    ];

    imageUrls.forEach((image) => {
      commanderImages.push(
        <StyledImage src={image} alt={`Commander Image ${image}`} />
      );
    });
  } else {
    const image = [props.listOfUrls[props.index]];
    commanderImages.push(
      <StyledImage src={image} alt={`Commander Image ${image}`} />
    );
  }

  console.log(props.commanders);

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
              {Array.isArray(props.commanders[props.index])
                ? formatNameForDisplay(props.commanders[props.index])
                : "No commander found"}
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
