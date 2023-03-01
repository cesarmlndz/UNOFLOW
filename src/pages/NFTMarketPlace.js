import React, { useContext, useEffect } from "react";
import NFT from "../components/NFT";
import "../css/NFTMarketPlace.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

export default function NFTMarketPlace() {
  const { openSeaNFTs, customData, favorites } = useContext(Context);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const featuredNFTs = openSeaNFTs
    .filter((nft) => nft.image_url && nft.name)
    .slice(0, 3);

  return (
    <>
      <header className="market-place-header">
        <h1>
          uno<span className="flow-word">flow</span> nft
        </h1>
        <p className="market-place-title">Welcome to our NFT marketplace!</p>
        <p className="market-place-description">
          Step into the world of blockchain art and collectibles featuring a
          diverse range of unique digital assets from renowned artists and
          creators around the globe.
        </p>
        <div className="market-place-buttons">
          <a href="#jump-to-featured">
            <button>Trending</button>
          </a>
          <a href="#jump-to-entire">
            <button>Browse Our collection</button>
          </a>
          <Link to="/NFTMarketPlace/Favorites">
            <button>
              {favorites.length < 1
                ? "Your Favorites"
                : `Your Favorites ( ${favorites.length} )`}
            </button>
          </Link>
        </div>
      </header>
      <div
        className="featured-section market-place-header"
        id="jump-to-featured"
      >
        <h3>Featured NFTs</h3>
        <p className="featured-description">
          Using the opensea API, we are dynamically showcasing three NFTs in our
          featured NFT section, where we display some of the most unique and
          exciting NFTs currently available on the market. Remember, this
          section of NFTs changes!
        </p>
        <div className="featured-nft-container" id="land-on-featured">
          {featuredNFTs.map((nft) => (
            <NFT key={nft.id} nft={nft} />
          ))}
        </div>
      </div>
      <div
        className="entire-collection-section market-place-header"
        id="jump-to-entire"
      >
        <h3>Our Collection</h3>
        <div className="entire-nft-container">
          {customData.map((nft) => (
            <NFT key={nft.id} nft={nft} />
          ))}
        </div>
      </div>
    </>
  );
}
