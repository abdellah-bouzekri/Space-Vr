import { useState } from "react";

function Pages() {
  const ArrayofPlanets = [
    {
      id: 1,
      name: "Titan",
      url: "/images/titan.webp",
    },
    {
      id: 2,
      name: "Moon",
      url: "/images/moon.webp",
    },
    {
      id: 3,
      name: "Jupiter",
      url: "/images/europa.webp",
    },
  ];

  const [positions, setPositions] = useState(
    ArrayofPlanets.map(() => ({ x: 0, y: 0 }))
  );
  const [isDragging, setIsDragging] = useState(null);

  function mouseDown(index) {
    setIsDragging(index);
  }

  function mouseMove(e) {
    if (isDragging === null) return;

    setPositions((prevPositions) =>
      prevPositions.map((position, i) =>
        i === isDragging
          ? {
              x: position.x + e.movementX,
              y: position.y + e.movementY,
            }
          : position
      )
    );
  }

  function mouseUp() {
    setIsDragging(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-stone-600 to-indigo-600 p-4 overflow-hidden ">
      <h2 className="text-center text-white text-lg mb-4 uppercase">
        Try to drag and Drop the Planets ⬇ imagine yourself in the space
      </h2>
      <div
        className="flex flex-wrap items-center justify-center gap-4"
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        onMouseLeave={mouseUp}>
        {ArrayofPlanets.map((planet, index) => (
          <div
            key={planet.id}
            className="relative w-full sm:w-64 h-64 cursor-grabbing  animate-spin-slow"
            style={{
              transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
              transition:
                isDragging === index ? "none" : "transform 0.9s ease-in-out",
            }}>
            <img
              src={planet.url}
              alt={planet.name}
              className="w-full h-full object-cover "
              onMouseDown={() => mouseDown(index)}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
