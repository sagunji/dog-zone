import { useContext, useCallback } from "react";
import { SavedImageContext } from "./SavedImageContext";

const useSave = () => {
  const [state, dispatch] = useContext(SavedImageContext);

  const onSave = useCallback(
    (value = "DOGS") => {
      dispatch({
        type: state.collections.includes(value) ? "REMOVE" : "ADD",
        payload: value,
      });
    },
    [dispatch, state.collections]
  );

  return { onSave, savedDogs: state.collections };
};

export default useSave;
