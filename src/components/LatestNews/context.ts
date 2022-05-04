import { createContext, useContext } from "react";

import { TagModel } from "models/Tag.model";
import tags from "constant/newsTag";

interface LatestNewsActionInterface {
  type: "setTag";
  payload?: any;
}

interface LatestNewsStateInterface {
  tag: TagModel;
}

export const latestNewsInitiaState: LatestNewsStateInterface = {
  tag: tags[0],
};

export const latestNewsReducer = (
  state = latestNewsInitiaState,
  { type, payload }: LatestNewsActionInterface
): LatestNewsStateInterface => {
  switch (type) {
    case "setTag": {
      if (!payload) return state;
      return { ...state, tag: payload };
    }

    default:
      return state;
  }
};

export const LatestNewsContext = createContext({
  state: latestNewsInitiaState,
  dispatch: (action: LatestNewsActionInterface) => {},
});

export const useLatestNewsContext = () => useContext(LatestNewsContext);
