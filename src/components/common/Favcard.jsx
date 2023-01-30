import React from "react";
import Imgdislike from "../../assets/img/favorite.svg";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../reducks/favorites/operations";

const FavCard = ({ favorite }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="favorite-list">
        <div className="favorite-image">
          <img src={favorite.image} alt="" />
          <div className="like">
            <img
              src={Imgdislike}
              onClick={() => dispatch(deleteFavorite(favorite.id))}
              alt=""
            />
          </div>
        </div>
        <div className="textcontent">
          <div className="favorite-heading">
            <h1>{favorite.name}</h1>
          </div>
          <div className="gridsubheading">
            <h2>{favorite.place_type}</h2>
          </div>
          <div className="gridtext">
            <p>Best time to visit: {favorite.time_to_travel}</p>
            <p>{favorite.description}</p>
          </div>
          <div className="input-button">
            <a className="direction" href={favorite.googel_map_link}>
              Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavCard;
