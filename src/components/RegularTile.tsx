import { useEffect, useState } from "react";
import { getTinyCardImage } from "../utils/magicAPI";
import styled from "styled-components";

interface CardInfoProps {
  name: string;
}

const Card = styled.img`
  // max-height: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  //   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
  //     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  height: 200px;
  pointer-events: none;
`;

export const RegularTile = (props: CardInfoProps) => {
  const [pictureUrl, setPictureUrl] = useState<string>();

  const fetchImages = async () => {
    let temp: string | string[] = props.name || [];

    try {
      // If props.name is a single string, fetch the image for that string
      const image = await getTinyCardImage(props.name);
      setPictureUrl(image);
    } catch (error) {
      console.error(`Trouble fetching ${temp}'s image: , `, error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [props.name]);

  return <Card src={pictureUrl} />;
};
