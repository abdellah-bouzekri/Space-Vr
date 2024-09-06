export default function SpaceContent() {
  const Cards = [
    { img1: "/images/space2.webp" },
    { img1: "/images/space3.webp" },
    { img1: "/images/space4.webp" },
  ];

  return (
    <div
      className="bg-cover bg-center min-h-screen bg-no-repeat w-full"
      style={{ backgroundImage: "url('/images/2560x1440.webp')" }}>
      <div className="bg-black/70 min-h-screen flex flex-col justify-start items-center px-4 md:px-8 py-8 md:py-16 space-y-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          {/* Text Section */}
          <div className="text-white w-full md:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              You Can't Experience <br className="hidden md:inline" /> This
              Anywhere Else
            </h3>
            <p className="text-base md:text-lg mb-6 max-w-2xl">
              Journey through the stars and explore the mysteries of the
              universe. Immerse yourself in the neon-lit worlds of tomorrow,
              where technology and humanity merge.
            </p>
            <button
              className="inline-block bg-purple-600
                hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">
              Explore Now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/space-flex.webp"
              alt="Futuristic Landscape"
              className="w-full max-w-md lg:max-w-xl h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <h3 className="text-white text-lg mt-8 uppercase w-full md:w-64 text-center mx-auto mb-6">
          Take a look at what you'll enjoy at galaxy cafe
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-7xl ">
          {Cards.map((im, index) => (
            <img
              key={index}
              src={im.img1}
              alt={`Space image ${index + 1}`}
              className="h-auto w-full sm:w-3/4 md:w-[335px] object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
