import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-wrap">
          ANA-OAU BOOK AND ARTS FESTIVAL
        </h1>
        <p className="text-lg text-wrap">
          Celebrating the language of today's student artists—through books,
          music, paint & performance.
        </p>
        <div className="flex justify-center gap-5 items-center mt-6">
          <a
            href="https://anaoau.org/book-festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-red-600 transition duration-300">
              Get Tickets
            </button>
          </a>
          <a
            href="https://anaoau.org/book-festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-red-600 transition duration-300">
              Get Tickets
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
