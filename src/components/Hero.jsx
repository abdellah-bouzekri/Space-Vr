import React from "react";

function Hero() {
  return (
    <div
      className="bg-cover bg-center h-screen bg-no-repeat w-full"
      style={{ backgroundImage: "url('/images/1876.webp')" }}>
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white p-8  bg-opacity-60 rounded-lg">
          <h1 className="text-6xl font-bold mb-4">Explore the Cosmos</h1>
          <p className="text-lg mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content <br />
            of a page when looking at its layout. The point of using Lorem
            Ipsum.
          </p>
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
            Start Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
