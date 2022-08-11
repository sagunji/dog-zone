import { styled } from "@mui/system";
import { useState } from "react";

interface IImageContainer {
  imageUrl: string;
  alt?: string;
}

const Container = styled("div")`
  height: calc(100vh - 100px);
  width: 100%;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #c3c3c3;
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
}) => {
  return (
    <Container>{imageUrl && <Image src={imageUrl} alt={alt} />}</Container>
  );
};

export default ImageContainer;
