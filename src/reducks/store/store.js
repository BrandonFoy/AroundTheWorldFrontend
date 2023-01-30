import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { PlacesReducer } from "../places/reducers";
import { CategoriesReducer } from "../categories/reducers";
import { FavoritesReducer } from "../favorites/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      places: PlacesReducer,
      categories: CategoriesReducer,
      favorites: FavoritesReducer,
    }),
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );
}