import { SET_LOADING, GET_MONSTERS } from "../types";

const MonstersReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case GET_MONSTERS:
      return {
        ...state,
        monsters: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return;
  }
};

export default MonstersReducer;
