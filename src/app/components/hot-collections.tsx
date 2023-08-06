import React from "react";

const cards = [
  {
    title: "Vamsi Collection ",
    collection: "291 in Collection",
  },
  {
    title: "krishna Collection",
    collection: "201 in Collection",
  },
  {
    title: "prasad Collection",
    collection: "Modern Art Collection",
  },
];

const HotCollections = () => {
  return (
    <section
      className="py-8"
      style={{ marginLeft: "81px", marginRight: "6px" }}
    >
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-4 px-6">
        <h2 className="text-2xl font-bold">Hot Collections</h2>
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
              style={{ width: "350px" }}
            >
              {/* User Logo and Name (Seller) */}
              <div className="items-center space-x-2 mb-2 p-2">
                <div>
                  <img
                    src="/auction1.png"
                    alt="profile logo"
                    className="w-18 h-18 rounded-lg"
                  />
                  <div className="flex space-x-2 gap-6">
                    <img
                      src="/auction2.png"
                      alt="profile logo"
                      className=" rounded-sm"
                      style={{width: "102px"}}
                    />
                    <img
                      src="/ram.jpg"
                      alt="profile logo"
                      className="rounded-sm"
                      style={{width: "65px"}}
                    />
                    <img
                      src="/auction3.png"
                      alt="profile logo"
                      className=" rounded-sm"
                      style={{width: "102px"}}
                    />
                  </div>
                </div>
              <div className="space-x-2 text-center">
                <p className="text-md font-semibold mb-1 p-2">{item.title}</p>
                <p className="text-sm text-gray-500 p-2">{item.collection}</p>
              </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default HotCollections;
