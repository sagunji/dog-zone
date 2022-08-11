import { Icon } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

interface IImageContainer {
  imageUrl: string;
  alt?: string;
  handleNewDog: () => void;
}

const Container = styled("div")`
  height: calc(100vh - 100px);
  width: 100%;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #e3e3e3;
  display: flex;
`;

const EmptyMessage = styled("div")`
  margin: auto;
  color: #1876d1;
  text-decoration: underline;
  cursor: pointer;
`;

const Image = styled("img")`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ImageContainer: React.FC<IImageContainer> = ({
  imageUrl,
  alt = "Dog",
  handleNewDog,
}) => {
  return (
    <Container>
      {imageUrl ? (
        <Image src={imageUrl} alt={alt} />
      ) : (
        <EmptyMessage onClick={handleNewDog}>
          Click "Here" to get a random doggo
        </EmptyMessage>
      )}
    </Container>
  );
};

export default ImageContainer;
