import React, { useReducer } from "react";
import { initialState } from "./initial-state";
import MonstersContext from "./monsters.context";
import MonstersReducer from "./monsters.reducer";
import axios from "axios";
import { BASE_URL } from "../types";

const MonstersState = ({ children }: any) => {
  const [state, dispatch] = useReducer(MonstersReducer, initialState) as [
    any,
    any
  ];

  const getMonsters = async () => {
    const monsters = await axios.get(BASE_URL);
    console.log(monsters);
  };

  return (
    <MonstersContext.Provider value={{ ...state, getMonsters }}>
      {children}
    </MonstersContext.Provider>
  );
};

export default MonstersState;
