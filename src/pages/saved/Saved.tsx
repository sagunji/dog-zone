import { styled } from "@mui/system";
import useDog from "../../context/useDog";

const SavedContainer = styled("div")`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const H1 = styled("h1")`
  text-align: center;
  font-size: 24px;
  margin: 0;
  padding: 4px;
  color: #606060;
`;

const SavedImagesWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: calc(100vh - 140px);
  overflow-y: scroll;
`;

const Image = styled("img")`
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    border: 2px solid blue;
  }
`;

const Saved = () => {
  const { savedDogs, udpateCurrentDog } = useDog();

  return (
    <SavedContainer>
      <H1>Saved</H1>
      <SavedImagesWrapper>
        {savedDogs.map((image: string) => (
          <Image
            key={image}
            src={image}
            onClick={() => udpateCurrentDog(image)}
          />
        ))}
      </SavedImagesWrapper>
    </SavedContainer>
  );
};

export default Saved;
