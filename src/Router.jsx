import React from "react";
import { Switch, Route } from 'react-router'
import Favorites from "./containers/Favorites.jsx";
import Home from "./containers/Home.jsx";
import Places from "./containers/Places.jsx";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/favorites"} component={Favorites} />
        <Route exact path={"/places"} component={Places} /> 
      </Switch>  
    </>
  );
};

export default Router;