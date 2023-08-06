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
    img: "/auction4.png",
    seller: "@Krishna",
    title: "Pretty Mundane",
    bid: "1.40 ETH",
    ending: "2h 30m 20s",
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

const MarketPlace = () => {
  return (
    <section
      className="py-8 bg-white"
      style={{ marginLeft: "81px", marginRight: "6px" }}
    >
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-4 px-6">
        <h2 className="text-2xl font-bold">Market Place</h2>
        {/* <div className="line h-[1px] bg-gray-500 flex-grow mx-4"></div> */}
        <div className="flex space-x-2">
          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 focus:outline-none"
              placeholder="Search..."
            />
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </span>
          </div>
          <div className="flex space-x-4">
            {/* Sort input */}
            <select className="py-2 w-48 rounded-full border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 focus:outline-none">
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              {/* Add more sorting options as needed */}
            </select>
          </div>
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
                  <button className="transparent">...</button>
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
                  <HeartInCircle />
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
                <a
                  href="#"
                  className="border bg-blue-900 text-sm text-white p-2"
                  style={{ borderRadius: "20px" }}
                >
                  Place a bid
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default MarketPlace;
