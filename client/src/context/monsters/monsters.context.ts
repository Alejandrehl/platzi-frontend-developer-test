import { createContext } from "react";
import { initialState } from "./initial-state";

const monstersContext = createContext(initialState);

export default monstersContext;
