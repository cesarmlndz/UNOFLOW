import axios from "axios";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import "../css/RoutedCoin.css";
import { Link } from "react-router-dom";

export default function RoutedCoin() {
  const { coinId } = useParams();
  const [routedCoin, setRoutedCoin] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => setRoutedCoin(res.data))
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, [coinId]);

  return (
    <>
      <div className="routed-header">
        <Link to={"/CryptoTracker"}>
          <h1 className="favorites-home-btn">
            back to <span className="flow-word">home page</span>
          </h1>
        </Link>
      </div>
      <div className="routed-card-container crypto-card-one">
        <p className="routed-coin-rank">Rank #{routedCoin.market_cap_rank}</p>
        <div className="routed-coin-image-duo">
          <img src={routedCoin.image?.small} alt="coin" />
          <p>{routedCoin.name}</p>
        </div>
      </div>
      <div className="routed-card-container crypto-card-two">
        <p>${routedCoin.market_data?.current_price.usd.toLocaleString()}</p>
      </div>
      <div className="routed-card-container crypto-card-three">
        <div className="routed-labels-container">
          <p className="routed-coin-label">1hr</p>
          <p className="routed-coin-label">24hr</p>
          <p className="routed-coin-label">7d</p>
          <p className="routed-coin-label">14d</p>
          <p className="routed-coin-label">30d</p>
          <p className="routed-coin-label">1y</p>
        </div>
        <div className="routed-coin-chart-container">
          {routedCoin.market_data?.price_change_percentage_1h ? (
            <p className="routed-coin-chart-value">
              {routedCoin.market_data.price_change_percentage_1h.toFixed(2)}
            </p>
          ) : null}
          {routedCoin.market_data?.price_change_percentage_24h ? (
            <p className="routed-coin-chart-value">
              {routedCoin.market_data.price_change_percentage_24h.toFixed(2)}
            </p>
          ) : null}
          {routedCoin.market_data?.price_change_percentage_7d ? (
            <p className="routed-coin-chart-value">
              {routedCoin.market_data.price_change_percentage_7d.toFixed(2)}
            </p>
          ) : null}
          {routedCoin.market_data?.price_change_percentage_14d ? (
            <p className="routed-coin-chart-value">
              {routedCoin.market_data.price_change_percentage_14d.toFixed(2)}
            </p>
          ) : null}
          {routedCoin.market_data?.price_change_percentage_30d ? (
            <p className="routed-coin-chart-value">
              {routedCoin.market_data.price_change_percentage_30d.toFixed(2)}
            </p>
          ) : null}
          {routedCoin.market_data?.price_change_percentage_1y ? (
            <p className="routed-coin-chart-value">
              {routedCoin.market_data.price_change_percentage_1y.toFixed(2)}
            </p>
          ) : null}
        </div>
      </div>
      <div className="routed-card-container crypto-card-four">
        <p className="routed-card-about-title">About</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              routedCoin.description ? routedCoin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </>
  );
}
