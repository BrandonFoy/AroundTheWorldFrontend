import {
  addFavoritesAction,
  fetchFavoritesAction,
  deleteFavoritesAction,
} from "./actions";

const FAVORITES_KEY = "FAVORITES_KEY";
export const fetchFromLocalStorage = () => {
  return async (dispatch) => {
    let favoritesJSON = localStorage.getItem(FAVORITES_KEY);
    let favorites = [];
    if (favoritesJSON) {
      favorites = JSON.parse(favoritesJSON);
    }
    dispatch(fetchFavoritesAction(favorites));
  };
};
export const addFavorite = (place) => {
  return async (dispatch, getState) => {
    let prevFavorites = getState().favorites.list;
    const nextFavorites = [place, ...prevFavorites];
    setToLocalStorage(nextFavorites);
    dispatch(addFavoritesAction(nextFavorites));
  };
};
export const deleteFavorite = (id) => {
  return async (dispatch, getState) => {
    let prevFavorites = getState().favorites.list;
    const nextFavorites = prevFavorites.filter((image) => image.id !== id);
    setToLocalStorage(nextFavorites);
    dispatch(deleteFavoritesAction(nextFavorites));
  };
};
export const setToLocalStorage = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};