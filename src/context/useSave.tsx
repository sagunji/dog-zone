import { useContext, useCallback } from "react";
import { SavedImageContext } from "./SavedImageContext";

const useSave = () => {
  const [state, dispatch] = useContext(SavedImageContext);

  const onSave = useCallback(
    (value = "DOGS") => {
      const action = state.collections.includes(value) ? "REMOVE" : "ADD";

      dispatch({
        type: action,
        payload: value,
      });
    },
    [state.collections]
  );

  return { onSave, savedDogs: state.collections };
};

export default useSave;
