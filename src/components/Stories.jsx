import React, { useState } from "react";

function Stories({ answer, question }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-3 w-full">
        <div className="p-4 bg-indigo-700 rounded-md mb-2">
          <button
            className="flex justify-between w-full"
            onClick={() => setOpen(!open)}>
            <span className="text-lg">{question}</span>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`block h-5 w-5 transition-all duration-300 ${
                  open ? "rotate-180" : ""
                } `}>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`block h-5 w-5 transition-all duration-300 ${
                  open ? "rotate-180" : ""
                } `}>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out
            ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}>
            <div className="overflow-hidden  text-slate-900 text-lg">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories;
