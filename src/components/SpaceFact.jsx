// import React, { useState, useEffect } from "react";

// const spaceFacts = [
//   "A year on Mercury is just 88 days long.",
//   "Venus is the hottest planet in our solar system.",
//   "Jupiter has the shortest day of all the planets.",
//   "Mars has the tallest volcano in our solar system.",
//   "Saturn's rings are made of ice and rock.",
//   "Uranus has a magnetic field that's highly tilted.",
//   "Neptune is the windiest planet.",
// ];

// function SpaceFact() {
//   const [fact, setFact] = useState("");

//   useEffect(() => {
//     const randomFact =
//       spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
//     setFact(randomFact);
//   }, []);

//   const getNewFact = () => {
//     let newFact;
//     do {
//       newFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
//     } while (newFact === fact);
//     setFact(newFact);
//   };

//   return (
//     <div className="bg-indigo-900 text-white rounded-lg p-6 max-w-md mx-auto my-8 shadow-lg">
//       <h3 className="text-2xl mb-4 text-center text-cyan-300 font-bold">
//         Space Fact of the Day
//       </h3>
//       <p className="text-lg mb-6 text-center">{fact} 👾</p>
//       <button
//         onClick={getNewFact}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-1000 ease-in-out block mx-auto">
//         New Fact
//       </button>
//     </div>
//   );
// }

// export default SpaceFact;
