import React from "react";

const HeroAbout = () => { 
  return (
    <div className="py-10 lg:px-10 w-full overflow-hidden mx-auto text-center bg-gray-100">

        <h3 className="font-semibold lg:text-xl">SIMPLY AMAZING PLACES</h3>


        <h3 className="font-bold text-4xl lg:text-5xl py-3">
          A few words about us
        </h3>

      <div className="hero py-24">
        <div
          className="hero-content flex flex-col lg:flex-row w-full mx-auto
         lg:gap-5 text-left"
        >
          <div className="w-full lg:w-2/5 mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold font-serif py-5">
              Explore All Corners of The World With Us
            </h1>
              <p className="py-2">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            <p className="py-2">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
            </p>
            <button className="btn btn-primary">
              Read More
            </button>
          </div>
            <div className="flex gap-5 w-full lg:w-3/5 object-cover">
              <img
                src="https://e0.pxfuel.com/wallpapers/55/589/desktop-wallpaper-mens-fashion-men-clothing-thumbnail.jpg"
                alt=""
                className="max-w-sm w-48 lg:w-1/2 md:w-fit mx-auto object-cover rounded-lg shadow-2xl"
              />
              <img
                src="https://e0.pxfuel.com/wallpapers/392/331/desktop-wallpaper-man-fashion-business-suit-tie-lifestyle-fine-thumbnail.jpg"
                alt=""
                className="max-w-sm w-48 lg:w-1/2 hidden md:block md:w-fit mx-auto object-cover rounded-lg shadow-2xl lg:mt-16 lg:-mb-16"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;