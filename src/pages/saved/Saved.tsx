import { styled } from "@mui/system";
import { useContext } from "react";

import { SavedImageContext } from "../../context/SavedImageContext";
import useSave from "../../context/useSave";

const SavedContainer = styled("div")`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const H1 = styled("h1")`
  text-align: right;
  font-size: 24px;
  margin: 0;
  padding: 4px;
  color: #606060;
`;

const SavedImagesWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
`;

const Image = styled("img")`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
`;

const Saved = () => {
  const { savedDogs } = useSave();

  return (
    <SavedContainer>
      <H1>Saved</H1>
      <SavedImagesWrapper>
        {savedDogs.map((image: string) => (
          <Image key={image} src={image} />
        ))}
      </SavedImagesWrapper>
    </SavedContainer>
  );
};

export default Saved;
