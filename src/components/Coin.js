import React from "react";
import { Link } from "react-router-dom";
import "../css/Coin.css";

export default function Coin(props) {
  const {
    name,
    image,
    market_cap_rank,
    total_volume,
    price_change_percentage_24h,
    symbol,
    current_price,
    id,
  } = props.coin;

  return (
    <Link to={`/CryptoTracker/${id}`} className="coin-container">
      <p className="label">{market_cap_rank}</p>
      <div className="label image-symbol-duo">
        <img src={image} alt="coin" />
        <p className="label">{symbol.toUpperCase()}</p>
      </div>
      <p className="label coin-title">{name}</p>
      <p className="label">${current_price.toLocaleString()}</p>
      <p className="label volume">${total_volume.toLocaleString()}</p>
      <p
        className="label"
        style={{
          color: price_change_percentage_24h >= 0 ? "lawngreen" : "red",
        }}
      >
        {price_change_percentage_24h.toFixed(3)}%
      </p>
    </Link>
  );
}
