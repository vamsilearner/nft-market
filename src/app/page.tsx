"use client";
import HeroCard from "./components/HeroCard";
import Footer from "./components/Footer/footer";
import HotCollections from "./components/hot-collections";
import LaunchNFT from "./components/launch-nft";
import MarketPlace from "./components/market-place";
import TopSellers from "./components/top-sellers";
import TrendingAuctions from "./components/trending-auctions";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <HeroCard />
        <TrendingAuctions />
        <TopSellers />
        <MarketPlace />
        <HotCollections />
        <LaunchNFT />
        <Footer />
      </div>
    </>
  );
}
