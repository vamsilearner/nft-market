// components/TrendingAuctions.js
import React from "react";

const cards = [
  {
    title: "Buy and Sell your NFT's",
  },
  {
    title: "Discover Top Artisit & Creators",
    collection:
      "Explore beautiful digital art by talented artists around the world.",
  },
  {
    title: "Earn Money by trading NFTs",
  },
];

const LaunchNFT = () => {
  return (
    <section
      className="py-8"
      style={{ marginLeft: "81px", marginRight: "6px" }}
    >
      {/* Section Heading */}
      <div className=" mb-4 px-6">
        <h2 className="text-2xl font-bold text-center">
          Mint, buy and sell
          <br />
          or just launch our own NFT
        </h2>
      </div>
      {/* Auction Cards */}
      <div className="flex flex-wrap justify-center mt-6">
        {cards.map((item, index) => (
          <>
            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: "350px",
                height: index === 1 ? "400px" : "350px",
                border: index === 1 ? "4px solid #3B82F6" : "",
                backgroundColor: "#F9FAFB",
                borderRadius: "0.75rem",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                marginTop: index !== 1 ? "15px" : "0",
              }}
            >
              {/* User Logo and Name (Seller) */}
              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full border-4 border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-1.5 1.5a6.002 6.002 0 01-2.828 10.95l-.772-.378a1 1 0 01-.532-.265L9.98 18.84a6.002 6.002 0 01-9.238-7.38L1.676 10.41a1 1 0 01.265-.532l.378-.772A6.002 6.002 0 0111.293 2.293zM12.293 4.293a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414l1.5 1.5a4.001 4.001 0 005.657 5.657l1.5 1.5a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-1.5-1.5a4.001 4.001 0 00-5.657-5.657l-1.5-1.5z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-1.5 1.5a6.002 6.002 0 01-2.828 10.95l-.772-.378a1 1 0 01-.532-.265L9.98 18.84a6.002 6.002 0 01-9.238-7.38L1.676 10.41a1 1 0 01.265-.532l.378-.772A6.002 6.002 0 0111.293 2.293zM12.293 4.293a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414l1.5 1.5a4.001 4.001 0 005.657 5.657l1.5 1.5a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-1.5-1.5a4.001 4.001 0 00-5.657-5.657l-1.5-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {/* <div className="space-y-2 text-center">
                  <p className="text-md font-semibold mb-1 p-2">{item.title}</p>
                  <p className="text-sm text-gray-500 p-2">
                    {item?.collection}
                  </p>
                </div> */}
                <div className="space-y-2 text-center">
                  <p className="text-md font-semibold mb-1 p-2">{item.title}</p>
                  {index === 1 && (
                    <p className="text-sm text-gray-500 p-2">
                      {item?.collection}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default LaunchNFT;
