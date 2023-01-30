import React, { useState, useEffect } from "react";
import Imglike from "../../assets/img/favorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../reducks/favorites/operations";
import { getFavorites } from "../../reducks/favorites/selectors";

const Thumbnail = ({ place }) => {
  const dispatch = useDispatch();
  const clickFavorite = (place) => {
    dispatch(addFavorite(place));
  };
  const selector = useSelector((state) => state);
  const favorites = getFavorites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoritePlace = favorites.filter(
      (favorite) => favorite.id === place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favorites, place.id ]);
  return (
    <>
      <div className="item">
        <div className="item-image">
          {showLikeButton && (
            <div className="like">
              <img
                className="like"
                src={Imglike}
                alt="favorites"
                onClick={() => {
                  clickFavorite(place);
                }}
              />
            </div>
          )}
          <img src={place.image} alt="place" />
        </div>
        <div className="item-text">
          <h1>{place.name}</h1>
          <p>{place.description}</p>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;