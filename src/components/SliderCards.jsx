import React from "react";
const SliderCardsImg = [
  {
    id: 1,
    src: "/images/Card1.png",
    Details:
      "Asteroid 2023DW, a newly discovered near-Earth object, is expected to make a close approach to Earth. Although it will pass safely by, it will be monitored closely by astronomers",
    bgColor: "bg-slate-900",
    Date: "March 15, 2025",
  },
  {
    id: 2,
    src: "/images/Orange Solar Eclipse Spiritual Quote Musical Mobile Video.jpg",
    Details:
      "An annular solar eclipse will be visible in parts of South America, the Atlantic Ocean, and West Africa. During this event, the Moon will cover the Sun's center, leaving a ring-like appearance.",
    bgColor: "bg-violet-900",
    Date: "October 2, 2025",
  },
  {
    id: 3,
    src: "/images/Card3.png",
    Details:
      "A total lunar eclipse will be visible across parts of North America, Europe, and Africa. The Moon will pass through Earth's shadow, causing a blood-red appearance and more stuff bro you feel me man.",
    bgColor: "bg-slate-900",
    Date: "March 14, 2025",
  },
];
function SliderCards() {
  return (
    <>
      <div className="bg-slate-950 flex justify-center items-center flex-col">
        <h1 className="text-white text-2xl text-center p-4 uppercase">
          the futur of events and inter & Entretaiment
        </h1>
        <p className="text-white  text-xm text-center p-4 max-w-[40ch] sm:max-w-[60ch] md:max-w-[80ch]">
          Discover the wonders of the cosmos at our upcoming space events. From
          meteor shower viewings to lectures on black holes, we offer a journey
          through the stars. Join us to explore distant galaxies, learn about
          exoplanets, and discuss the latest in space exploration. Whether
          you're a seasoned astronomer or a curious novice, our events will
          expand your universal horizons.
        </p>
        <div className="flex flex-wrap justify-center items-start gap-4 p-4 cursor-pointer ">
          {SliderCardsImg.map((img) => (
            <div
              key={img.id}
              className={`${img.bgColor} flex flex-col rounded-lg overflow-hidden shadow-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)]  hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 ease-in-out group `}>
              <img
                src={img.src}
                alt="Card"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 flex-grow">
                <p className="text-white font-mono text-xl text-center p-3">
                  {img.Date}
                </p>
                <p className="text-white text-sm text-center group-hover:text-stone-500 transition-colors duration-300">
                  {img.Details}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://telescopius.com/events/list/2025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white mb-5  bg-slate-950 p-5 rounded-lg border-2 border-white hover:bg-slate-800 transition duration-300 ease-in-out">
          View more events
        </a>
      </div>
    </>
  );
}

export default SliderCards;
