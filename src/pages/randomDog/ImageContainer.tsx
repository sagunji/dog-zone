import { styled } from "@mui/system";
import useDog from "../../context/useDog";

interface IImageContainer {
  alt?: string;
}

const Container = styled("div")`
  height: calc(100vh - 140px);
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

const ImageContainer: React.FC<IImageContainer> = ({ alt = "Dog" }) => {
  const { currentDog, getRandomDoggo } = useDog();

  return (
    <Container>
      {currentDog ? (
        <Image src={currentDog} alt={alt} />
      ) : (
        <EmptyMessage onClick={getRandomDoggo}>
          Click "Here" to get a random doggo
        </EmptyMessage>
      )}
    </Container>
  );
};

export default ImageContainer;
