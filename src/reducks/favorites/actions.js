export const ADD_FAVORITES = "ADD_FAVORITES";
export const addFavoritesAction = (favorites) => {
  return {
    type: "ADD_FAVORITES",
    list: favorites,
  };
};
export const FETCH_FAVORITES = "FETCH_FAVORITES";
export const fetchFavoritesAction = (favorites) => {
  return {
    type: "FETCH_FAVORITES",
    list: favorites,
  };
};
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const deleteFavoritesAction = (favorites) => {
  return {
    type: "DELETE_FAVORITES",
    list: favorites,
  };
};
