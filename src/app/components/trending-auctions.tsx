// components/TrendingAuctions.js
import React from "react";
import HeartInCircle from "./heart/HeartInCircle";

const cards = [
  {
    user: "@VamsiKrishna",
    img: "/auction1.png",
    seller: "@KrishnaPrasad",
    title: "Way Back Home ~ #",
    bid: "0.40 ETH",
    ending: "7h 30m 20s",
  },
  {
    user: "@Vamsi",
    img: "/auction2.png",
    seller: "@Krishna",
    title: "Way Back Home ~ #",
    bid: "0.60 ETH",
    ending: "8h 30m 20s",
  },
  {
    user: "@Prasad",
    img: "/auction3.png",
    seller: "@Kancharla",
    title: "#025 - Cowboy",
    bid: "0.90 ETH",
    ending: "9h 30m 20s",
  },
  {
    user: "@Vamsi",
    img: "/auction4.png",
    seller: "@Krishna",
    title: "Pretty Mundane",
    bid: "1.40 ETH",
    ending: "2h 30m 20s",
  },
];

const TrendingAuctions = () => {
  return (
    <section className="py-8 bg-white" style={{ marginLeft: "81px",marginRight: "6px"}}>
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-4 px-6">
        <h2 className="text-2xl font-bold">Trending Auctions
        </h2>
        <div className="line h-[1px] bg-gray-500 flex-grow mx-4"></div>
        <div className="flex space-x-2">
          <button className="px-3 py-2 border rounded-full text-gray-500 hover:text-gray-900">
            &lt;
          </button>
          <button className="px-3 py-2 border rounded-full text-gray-500 hover:text-gray-900">
            &gt;
          </button>
          <button className="px-4 py-2  bg-gray-100 text-black rounded-lg">
            View All <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
      {/* Auction Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {cards.map((item, index) => (
          <>
            <div
              className="border bg-white rounded-lg shadow-md"
              style={{ width: "250px" }}
            >
              <div>
                <div className="flex items-center justify-between p-2">
                  {/* User Logo and Name */}
                  <div className="flex items-center space-x-2">
                    <div>
                      <img
                        src="/ram.jpg"
                        alt="profile logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mx-2">{item.user}</p>
                  </div>
                  {/* Love Symbol Icon */}
                  <HeartInCircle />
                  {/* <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3.382l1.582 3.913h4.256l-3.438 2.5 1.556 3.88-3.981-2.922-3.979 2.922 1.558-3.88-3.438-2.5h4.256l1.582-3.913zM10 1.608L8.22 6.065H2.04l3.77 2.75-1.456 3.63L10 9.076l6.646 4.368-1.456-3.63 3.77-2.75h-6.18L10 1.608z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div> */}
                </div>

                {/* NFT Image */}
                <div>
                  <img
                    src={item.img}
                    alt="NFT Image"
                    className="w-full h-40 object-cover my-2"
                  />
                </div>

                {/* User Logo and Name (Seller) */}
                <div className="flex items-center space-x-2 mb-2 p-2">
                  <div>
                    <img
                      src="/ram.jpg"
                      alt="profile logo"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">{item.seller}</p>
                </div>

                {/* Title */}
                <p className="text-lg font-semibold mb-1 p-2">{item.title}</p>
              </div>
              {/* Current Bid and Ending Time */}
              <div className="flex justify-between items-center space-x-2 bg-gray-100 p-2">
                <p className="text-sm text-gray-500">
                  Current bid <br />
                  <i className="fab fa-ethereum"></i>
                  {item.bid}
                </p>
                <p className="text-sm text-gray-500">
                  Ending in <br /> {item.ending}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default TrendingAuctions;
