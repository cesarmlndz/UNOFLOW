import React, { useContext } from "react";
import "../css/NFT.css";
import { Context } from "../context/Context";

export default function NFT(props) {
  const { addToFavorites } = useContext(Context);

  const {
    id,
    name,
    image_url,
    permalink,
    price,
    image_preview_url,
    image_thumbnail_url,
  } = props.nft;
  return (
    <div className="complete-nft">
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
      <button onClick={() => addToFavorites(id)}>Add to Favorites</button>
    </div>
  );
  //test
}
