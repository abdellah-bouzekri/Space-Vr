import React, { useState } from "react";

function FooterBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      image:
        "https://images.pexels.com/photos/7562020/pexels-photo-7562020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/7562068/pexels-photo-7562068.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      image:
        "https://images.pexels.com/photos/7869249/pexels-photo-7869249.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  function handlePrevClick() {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  function handleNextClick() {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore the Final Frontier at Our VR Space Cafe
            </h2>
            <p className="text-lg mb-6">
              Experience the wonders of the cosmos like never before. Our
              state-of-the-art VR technology transports you to the far reaches
              of the universe, where you can explore planets, galaxies, and the
              vastness of space.
            </p>
            <button className="bg-indigo-500 hover:bg-indigo-600  text-white py-3 px-6 rounded-md transition-colors duration-300">
              Visit Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10">
                <button onClick={handlePrevClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-950 hover:text-gray-300 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10">
                <button onClick={handleNextClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-950 hover:text-gray-300 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full h-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                  }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full">
                      <img
                        src={testimonial.image}
                        className="w-full h-full object-cover"
                      />
                      {/* <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-80 p-4 rounded-md">

                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBanner;
