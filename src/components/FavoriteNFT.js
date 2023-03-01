import React, { useContext } from "react";
import "../css/FavoriteNFT.css";
import { Context } from "../context/Context";

export default function FavoriteNFT(props) {
  const { removeFromFavorites } = useContext(Context);

  const {
    id,
    name,
    image_url,
    permalink,
    price,
    image_preview_url,
    image_thumbnail_url,
  } = props.fav;

  return (
    <div className="favorite-nft-container">
      <div className="nft-container">
        <a href={permalink}>
          <img
            src={
              image_url
                ? image_url
                : image_preview_url
                ? image_preview_url
                : image_thumbnail_url
            }
            alt="nft"
          />
          <div className="nft-description">
            <p className="nft-title">{name}</p>
            <p className="nft-price">{price}</p>
          </div>
        </a>
      </div>
      <button onClick={() => removeFromFavorites(id)}>Remove</button>
    </div>
  );
}
