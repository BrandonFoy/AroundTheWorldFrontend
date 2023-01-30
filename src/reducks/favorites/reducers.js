import * as Actions from "./actions";
import initialState from "../store/initialState";

export const FavoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case Actions.ADD_FAVORITES:
      return {
        ...state,
        list: action.list,
      };
    case Actions.FETCH_FAVORITES:
      return {
        ...state,
        list: action.list,
      };
    case Actions.DELETE_FAVORITES:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};