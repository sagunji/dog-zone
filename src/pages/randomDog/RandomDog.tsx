import { useContext, useState } from "react";
import { fetchRandomDog } from "../../services/dog";

import ButtonGroup from "../../components/ButtonGroup";
import AppButton from "../../components/Button";
import { Box } from "@mui/material";
import ImageContainer from "./ImageContainer";

import useSave from "../../context/useSave";

const RandomDog = () => {
  const [randomDog, setRandomDog] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { onSave } = useSave();

  const handleNewDog = async () => {
    try {
      setIsLoading(true);
      const dog = await fetchRandomDog();
      setRandomDog(dog.message);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

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
          onClick={handleNewDog}
          label={"Random Good Boy/Girl"}
          variant="contained"
        />
        <AppButton
          icon={"bookmark"}
          onClick={() => onSave(randomDog)}
          label={"Save Good Boy/Girl"}
          variant={"outlined"}
        />
      </ButtonGroup>
      <ImageContainer imageUrl={randomDog} />
    </Box>
  );
};

export default RandomDog;
