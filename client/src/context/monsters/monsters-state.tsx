import React, { useReducer } from "react";
import { initialState } from "./initial-state";
import MonstersContext from "./monsters.context";
import MonstersReducer from "./monsters.reducer";
import axios from "axios";
import { BASE_URL, GET_MONSTERS } from "../types";

const MonstersState = ({ children }: any) => {
  const [state, dispatch] = useReducer(MonstersReducer, initialState) as [
    any,
    any
  ];

  const getMonsters = async () => {
    const res = await axios.get(BASE_URL);
    dispatch({ type: GET_MONSTERS, payload: res.data });
  };

  return (
    <MonstersContext.Provider value={{ ...state, getMonsters }}>
      {children}
    </MonstersContext.Provider>
  );
};

export default MonstersState;
