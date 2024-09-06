import { useState, useEffect } from "react";

function Pages() {
  const ArrayofPlanets = [
    { id: 1, name: "Titan", url: "/images/titan.webp" },
    { id: 2, name: "Moon", url: "/images/moon.webp" },
    { id: 3, name: "Jupiter", url: "/images/europa.webp" },
  ];

  const [positions, setPositions] = useState(
    ArrayofPlanets.map(() => ({ x: 0, y: 0 }))
  );
  const [isDragging, setIsDragging] = useState(null);

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isDragging === null) return;
      const touch = e.touches[0];
      setPositions((prevPositions) =>
        prevPositions.map((position, i) =>
          i === isDragging
            ? {
                x:
                  position.x +
                  touch.clientX -
                  (position.startX || touch.clientX),
                y:
                  position.y +
                  touch.clientY -
                  (position.startY || touch.clientY),
              }
            : position
        )
      );
    };

    document.addEventListener("touchmove", handleTouchMove);
    return () => document.removeEventListener("touchmove", handleTouchMove);
  }, [isDragging]);

  function handleStart(index, clientX, clientY) {
    setIsDragging(index);
    setPositions((prevPositions) =>
      prevPositions.map((position, i) =>
        i === index
          ? { ...position, startX: clientX, startY: clientY }
          : position
      )
    );
  }

  function handleMove(e) {
    if (isDragging === null) return;
    const { clientX, clientY } = e.type.startsWith("mouse") ? e : e.touches[0];
    setPositions((prevPositions) =>
      prevPositions.map((position, i) =>
        i === isDragging
          ? {
              x: position.x + clientX - (position.startX || clientX),
              y: position.y + clientY - (position.startY || clientY),
              startX: clientX,
              startY: clientY,
            }
          : position
      )
    );
  }

  function handleEnd() {
    setIsDragging(null);
  }

  return (
    <div
      className="min-h-screen w-full p-4 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('/images/sky.webp')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Darkens the background */}
      <div className="relative z-10 ">
        <h2 className="text-center text-white text-lg mb-4 uppercase">
          Try to drag and Drop the Planets ⬇ imagine yourself in the space
        </h2>
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}>
          {ArrayofPlanets.map((planet, index) => (
            <div
              key={planet.id}
              className="relative w-64 h-64 cursor-grabbing animate-spin-slow"
              style={{
                transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
                transition:
                  isDragging === index ? "none" : "transform 0.9s ease-in-out",
              }}>
              <img
                src={planet.url}
                alt={planet.name}
                className="w-full h-full object-contain"
                onMouseDown={(e) => handleStart(index, e.clientX, e.clientY)}
                onTouchStart={(e) =>
                  handleStart(index, e.touches[0].clientX, e.touches[0].clientY)
                }
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pages;
