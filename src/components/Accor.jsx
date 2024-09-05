import React, { useState } from "react";
import Stories from "./Stories";
// import SpaceFact from "./SpaceFact";
const planetData = [
  {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgd: "384,400 km",
    EstTravelTime: "3 Days",
    src: "/images/moon.webp",
  },
  {
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avgd: "225 million km",
    EstTravelTime: "9 Months",
    src: "/images/mars.webp",
  },
  {
    name: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgd: "628 million km",
    EstTravelTime: "5 Years",
    src: "/images/europa.webp",
  },
];
function Accor() {
  const [selectedPlanet, setSelectedPlanet] = useState(planetData[0]);

  function handlePlanetClick(planetName) {
    const planet = planetData.find((p) => p.name === planetName);
    setSelectedPlanet(planet);
  }
  return (
    <>
      <div
        className=" md:p-8 p-3 text-white bg-cover bg-center bg-no-repeat  min-h-screen w-full"
        style={{
          backgroundImage: "url('/images/background-destination-desktop.jpg')",
        }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center">
          Pick your destination
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 pr-0 md:pr-8 mb-6 md:mb-0">
            <img
              src={selectedPlanet.src}
              alt={selectedPlanet.name}
              className="w-3/4 mx-auto md:w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/5 pl-0 md:pl-8">
            <div className="mb-6 flex flex-wrap justify-center md:justify-start">
              {planetData.map((planet) => (
                <button
                  key={planet.name}
                  onClick={() => handlePlanetClick(planet.name)}
                  className={`m-2 p-2 rounded-lg transition-colors ${
                    selectedPlanet.name === planet.name
                      ? "bg-indigo-600"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}>
                  {planet.name}
                </button>
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 uppercase">
              {selectedPlanet.name}
            </h3>
            <p className="mb-6 text-base md:text-lg">
              {selectedPlanet.description}
            </p>
            <div className="border-t border-gray-600 pt-6">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="mb-4 sm:mb-0">
                  <p className="text-sm text-gray-400">Avg. Distance</p>
                  <p className="text-xl md:text-2xl">{selectedPlanet.avgd}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Est. Travel Time</p>
                  <p className="text-xl md:text-2xl">
                    {selectedPlanet.EstTravelTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center min-h-screen bg-no-repeat w-full p-4 text-white"
        style={{
          backgroundImage: "url('/images/background-destination-desktop.jpg')",
        }}>
        <Stories
          question="Dark Matter and Dark Energy?"
          answer="Dark matter and dark energy make up about 95% of the universe, yet they remain some of the greatest mysteries in cosmology. Dark matter is thought to be an invisible substance that exerts gravitational forces, helping to hold galaxies together"
        />
        <Stories
          question="Black Holes"
          answer="Black holes are regions of space where gravity is so strong that nothing, not even light, can escape. They form when massive stars collapse under their own gravity at the end of their life cycle. The event horizon is the boundary surrounding a black hole, beyond which nothing can return. The supermassive black hole at the center of the Milky Way, known as Sagittarius A*, has a mass equivalent to about 4 million suns."
        />
        <Stories
          question="Galaxies"
          answer="Galaxies are vast collections of stars, planets, gas, and dust held together by gravity. The Milky Way, our home galaxy, contains over 100 billion stars and spans about 100,000 light-years. Other notable galaxies include the Andromeda Galaxy, which is on a collision course with the Milky Way, and the Whirlpool Galaxy, known for its stunning spiral structure."
        />
      </div>
    </>
  );
}

export default Accor;
