import ButtonGroup from "../../components/ButtonGroup";
import AppButton from "../../components/Button";
import { Box } from "@mui/material";
import ImageContainer from "./ImageContainer";

import useDog from "../../context/useDog";

const RandomDog = () => {
  const { onSave, getRandomDoggo, currentDog } = useDog();

  return (
    <Box
      display={"flex"}
      alignItems={"left"}
      flexDirection="column"
      gap={"40px"}
    >
      <ButtonGroup>
        <AppButton
          icon={"search"}
          onClick={getRandomDoggo}
          label={"Random Good Boy/Girl"}
          variant="contained"
        />
        <AppButton
          icon={"bookmark"}
          onClick={() => onSave(currentDog)}
          label={"Save Good Boy/Girl"}
          variant={"outlined"}
          disabled={!currentDog}
        />
      </ButtonGroup>
      <ImageContainer />
    </Box>
  );
};

export default RandomDog;
