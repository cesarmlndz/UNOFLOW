import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="unoflow-nft-cover cover">
        <div className="overlay cover">
          <h1 className="unoflow-nft-cover-h1">
            uno<span className="flow-word">flow</span> nft's
          </h1>
          <p>
            Discover a new world of digital art and collectibles on our NFT
            marketplace. Explore unique pieces, connect with creators and
            collectors, and take the next step for the future of Web3 with our
            user-friendly platform.
          </p>
          <Link to="/NFTMarketPlace">
            <button>Explore</button>
          </Link>
        </div>
      </div>
      <div className="unoflow-crypto-cover cover">
        <div className="overlay cover">
          <h1>
            uno<span className="flow-word">flow</span> crypto
          </h1>
          <p>
            Track the latest prices and trends of top cryptocurrencies on our
            tracker website. Stay up-to-date with real-time data, customizable
            charts, and insightful analysis to make informed investment
            decisions in the dynamic world of digital currencies.
          </p>
          <Link to="/CryptoTracker">
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </>
  );
}
