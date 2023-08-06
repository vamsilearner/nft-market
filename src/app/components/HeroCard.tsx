import React from 'react';

const HeroCard = () => {
  return (
    <div className="bg-white">
      <div className="relative px-6 lg:px-8">
        {/* First gradient overlay */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* Gradient shape */}
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row"> {/* Change to flex-column on small screens and row on larger screens */}
          <div className="mx-auto max-w-2xl">
            <div className="text-left left-0 py-6 px-4 sm:px-20" style={{ position: "absolute" }}>
              {/* Heading */}
              <h1 className="text-3xl sm:text-6xl font-bold tracking-tight" style={{ color: "#fc9803", fontFamily: 'sans-serif' }}>
                NFT <br /> MARKETPLACE
              </h1>
              <br />
              <h1 className="text-3xl sm:text-6xl font-bold tracking-tight" style={{ color: "#e64059" }}>
                BASED ON <br /> KALPTANTRA
              </h1>
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4"> {/* Change to flex-column on small screens and row on larger screens */}
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  style={{ backgroundColor: "#fc9803" }}
                >
                  EXPLORE NFTs
                </a>
                <a
                  href="#"
                  className="rounded-md bg-white border border-grey-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create NFT
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-0"> {/* Add margin-top only on small screens */}
            <img src="/hero.png" alt="hero page" className="h-auto w-full sm:h-100 sm:w-100" /> {/* Use auto height on small screens */}
          </div>
        </div>
        {/* Second gradient overlay */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          {/* Gradient shape */}
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
