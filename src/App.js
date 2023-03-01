import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import NFTMarketPlace from "./pages/NFTMarketPlace";
import CryptoTracker from "./pages/CryptoTracker";
import RoutedCoin from "./pages/RoutedCoin";
import Favorites from "./pages/Favorites";
import { ContextProvider } from "./context/Context";

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/NFTMarketPlace" element={<NFTMarketPlace />}></Route>
            <Route path="/CryptoTracker" element={<CryptoTracker />}></Route>
            <Route path="/CryptoTracker/:coinId" element={<RoutedCoin />} />
            <Route path="/NFTMarketPlace/Favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
}
