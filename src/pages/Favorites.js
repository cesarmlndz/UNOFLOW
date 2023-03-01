import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Favorites.css";
import { Context } from "../context/Context";
import FavoriteNFT from "../components/FavoriteNFT";

export default function Favorites() {
  const { favorites } = useContext(Context);

  return (
    <>
      <div className="routed-header">
        <Link to={"/NFTMarketPlace"}>
          <h1 className="favorites-home-btn">
            back to <span className="flow-word">home page</span>
          </h1>
        </Link>
      </div>
      <div className="favorites-container">
        <p className="favorites-text">Your Favorites</p>
        <div className="favorites-items">
          {favorites.length >= 1 ? (
            favorites.map((fav) => <FavoriteNFT fav={fav} />)
          ) : (
            <h2>No favorites added yet!</h2>
          )}
        </div>
      </div>
    </>
  );
}
