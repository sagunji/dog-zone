import _ from "lodash";
import { createContext, useReducer } from "react";

const initialContext = {
  collections: [],
};

const SavedImageContext = createContext<any>(initialContext);

const saveReducer = (state: any, action: { payload: string; type: string }) => {
  const { payload, type } = action;

  switch (type) {
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

interface ISaveImageProvider {
  children: JSX.Element | JSX.Element[];
}

const SaveImageProvider = ({ children }: ISaveImageProvider) => {
  const reducer = useReducer(saveReducer, initialContext);

  return (
    <SavedImageContext.Provider value={reducer}>
      {children}
    </SavedImageContext.Provider>
  );
};

export { SavedImageContext };
export default SaveImageProvider;
