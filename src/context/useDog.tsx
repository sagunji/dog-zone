import { useContext, useCallback } from "react";
import { fetchRandomDog } from "../services/dog";
import { DogContext } from "./DogContext";

const useDog = () => {
  const [state, dispatch] = useContext(DogContext);

  const getRandomDoggo = useCallback(async () => {
    const dog = await fetchRandomDog();
    dispatch({
      type: "ADD_CURRENT_DOG",
      payload: dog.message,
    });
  }, [dispatch]);

  const udpateCurrentDog = (dog: string) => {
    dispatch({
      type: "ADD_CURRENT_DOG",
      payload: dog,
    });
  };

  const onSave = useCallback(
    (value = "DOGS") => {
      dispatch({
        type: state.collections.includes(value) ? "REMOVE" : "ADD",
        payload: value,
      });
    },
    [dispatch, state.collections]
  );

  return {
    onSave,
    savedDogs: state.collections,
    getRandomDoggo,
    currentDog: state.currentDog,
    udpateCurrentDog,
  };
};

export default useDog;
