import React, { useEffect, useState } from "react";
import { addFavorite } from "../../reducks/favorites/operations";
import { getFavorites } from "../../reducks/favorites/selectors";
import { useSelector, useDispatch } from "react-redux";
import Imglike from "../../assets/img/favorite.svg";

const Card = ({ place }) => {
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
      setShowLikeButton(!showLikeButton);
    }
  }, [favorites, place.id]);

  return (
    <>
        <div className="category-list">
          <div className="category-image">
            <img src={place.image} alt="" />
            <div className="like">
              <img
                src={Imglike}
                onClick={() => {
                  clickFavorite(place);
                }}
                alt=""
              />
            </div>
          </div>
          <div className="category-text">
            <div className="category-heading">
              <h1>{place.name}</h1>
            </div>
            <div className="gridsubheading">
              <h2>{place.place_type}</h2>
            </div>
            <div className="gridtext">
              <p>Best time to visit:{place.time_to_travel}</p>

              <p>{place.description}</p>
            </div>
            <div className="input-button">
              <a href={place.googel_map_link} target="_blank" rel="noopener noreferrer">
                {" "}
                Direction{" "}
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;