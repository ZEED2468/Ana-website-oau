import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#072422]">
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-wrap special-font text-white">
          ANA-OAU BOOK AND ARTS FESTIVAL
        </h1>
        <p className="text-lg text-wrap text-white">
          Celebrating the language of today's student artists—through books,
          music, paint & performance.
        </p>
        <div className="flex justify-center gap-5 items-center mt-6">
          <a
            href="https://anaoau.org/book-festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#0B2422] text-[#89D383] px-6 py-2 border-2 border-[#000000] rounded mt-4 transition duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Get a Stand
            </button>
          </a>
          <a
            href="https://anaoau.org/book-festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#008300] text-white px-6 py-2 border-2 border-[#000000] rounded mt-4 transition duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Buy a Ticket
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
