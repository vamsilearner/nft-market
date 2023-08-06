// components/TrendingAuctions.js
import React from "react";

const cards = [
  {
    img:"/omram.jpg",
    name: "@Vamsi",
    price: "$1,234"
  },
  {
    img:"/omram2.jpg",
    name: "@krishna",
    price: "$1,567"
  },
  {
    img:"/omram.jpg",
    name: "@prasad",
    price: "$3,679"
  },
  {
    img:"/omram2.jpg",
    name: "@kancharla",
    price: "$1,987"
  },
  {
    img:"/omram.jpg",
    name: "@Vamsi",
    price: "$1,234"
  },
  {
    img:"/omram2.jpg",
    name: "@krishna",
    price: "$1,079"
  },
];

const TopSellers = () => {
  return (
    <section
      className="py-8"
      style={{ marginLeft: "81px", marginRight: "6px" }}
    >
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-4 px-6">
        <h2 className="text-2xl font-bold">Our Top Sellers</h2>
        <div className="line h-[1px] bg-gray-500 flex-grow mx-4"></div>
        <div className="flex space-x-2">
          <button className="px-3 py-2 border rounded-full text-gray-500 hover:text-gray-900">
            &lt;
          </button>
          <button className="px-3 py-2 border rounded-full text-gray-500 hover:text-gray-900">
            &gt;
          </button>
          <button className="px-4 py-2 bg-gray-100 text-black rounded-lg">
            View All <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
      {/* Auction Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {cards.map((item, index) => (
          <>
            <div
              className="border bg-gray-100 rounded-lg shadow-md"
              style={{ width: "161px" }}
            >
              {/* User Logo and Name (Seller) */}
              <div className="items-center space-x-2 mb-2 p-2 text-center">
                  <img
                    src={item.img}
                    alt="profile logo"
                    className="w-18 h-18 rounded-full"
                  />
                <p className="text-md font-semibold mb-1">{item.name}</p>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default TopSellers;
