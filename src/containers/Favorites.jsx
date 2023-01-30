import React from "react";
import Favcard from "../components/common/Favcard";
import Footer from "../components/common/Footer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFavorites } from "../reducks/favorites/selectors";
import { useEffect } from "react";
import { fetchFromLocalStorage } from "../reducks/favorites/operations";
import PlacesHeader from "../components/common/PlacesHeader";

const Favorites = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favorites = getFavorites(selector);
  console.log(favorites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  },[]);

  return (
    <>
      <PlacesHeader />
      <section className="section2">
        <div className="heading-favorite">Favorite Places</div>
        <div className="grid">
          {favorites.map((favorite) => (
            <Favcard favorite={favorite} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favorites;