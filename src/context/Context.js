import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { customData } from "../data/nftdata";

const Context = createContext();

function ContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [openSeaNFTs, setOpenSeaNFTs] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.opensea.io/api/v1/assets?format=json")
      .then((res) => setOpenSeaNFTs(res.data.assets))
      .catch((err) => console.log(err));
  }, []);

  const mergedNFTs = openSeaNFTs.concat(customData);

  const addToFavorites = (id) => {
    const favNFT = mergedNFTs.find((nft) => nft.id === id);

    if (favorites.includes(favNFT)) alert("This NFT is already favorited!");
    else {
      setFavorites((prevItems) => [...prevItems, favNFT]);
      alert("You favorited this NFT!");
    }
  };

  const removeFromFavorites = (id) => {
    const removeNFT = favorites.find((nft) => nft.id === id);
    setFavorites(favorites.filter((nft) => nft.id !== removeNFT.id));
  };

  return (
    <Context.Provider
      value={{
        favorites,
        setFavorites,
        openSeaNFTs,
        setOpenSeaNFTs,
        addToFavorites,
        customData,
        removeFromFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
