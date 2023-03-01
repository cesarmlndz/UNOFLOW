import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/CryptoTracker.css";
import Coin from "../components/Coin";

export default function CryptoTracker() {
  const [allCoins, setAllCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      )
      .then((res) => setAllCoins(res.data))
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, []);

  const filteredCoins = allCoins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="crypto-header">
        <h1>
          uno<span className="flow-word">flow</span> crypto
        </h1>
        <input
          placeholder="Search for coin by entering name or symbol . . ."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>
      <div className="coin-labels">
        <p className="label">#</p>
        <p className="label">Symbol</p>
        <p className="label coin-title">Name</p>
        <p className="label">Price</p>
        <p className="label volume">Volume</p>
        <p className="label">24hr</p>
      </div>
      <div className="all-coins-container">
        {filteredCoins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
    </>
  );
}
