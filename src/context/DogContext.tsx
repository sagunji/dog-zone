import _ from "lodash";
import { createContext, useReducer } from "react";

const initialContext = {
  currentDog: "",
  collections: [],
};

const DogContext = createContext<any>(initialContext);

const saveReducer = (state: any, action: { payload: string; type: string }) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_CURRENT_DOG":
      return {
        ...state,
        currentDog: payload,
      };
    case "ADD":
      return {
        ...state,
        collections: _.union(state.collections, [payload]),
      };
    case "REMOVE":
      return {
        ...state,
        collections: _.remove(state.collections, (item) => item !== payload),
      };
    default:
      return {
        ...state,
      };
  }
};

interface IDogProvider {
  children: JSX.Element | JSX.Element[];
}

const DogProvider = ({ children }: IDogProvider) => {
  const reducer = useReducer(saveReducer, initialContext);

  return <DogContext.Provider value={reducer}>{children}</DogContext.Provider>;
};

export { DogContext };
export default DogProvider;
