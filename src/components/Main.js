import React from "react";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";
import PlaylistPage from "./pages/Playlist";
import SingleSongPage from "./pages/SingleSongPage";
import { useHistory } from "react-router-dom";

const Main = () => {
  let history = useHistory();
  return (
    <div className="main">
      <div className="upperNav">
        <button className="goBackButton" onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/search">Search</Route>
          <Route path="/your-library">Your library</Route>
          <Route path="/playlist/:id" component={PlaylistPage}></Route>
          <Route path="/singleSongPage/:id" component={SingleSongPage}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
