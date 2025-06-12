import React from "react";

const Sponsors = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-[4.5rem_1.5rem] lg:p-[6.5rem_7.5rem_6.5rem_7.5rem] gap-5 lg:gap-[11.70363rem] w-full">
      <div className="flex flex-col gap-5 flex-start items-start">
        <h1 className="text-3xl font-bold special-font lg:w-[22.8125rem]">
          Our Sponsors & Partners
        </h1>
        <p className="text-[#62636C] lg:w-[26.75rem]">
          8 incredible guest artists, poets, and creators will join us to speak, perform, and inspire.
        </p>
        {/* Button only visible on large screens */}
        <a
          href="https://anaoau.org/book-festival"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <button className="bg-[#008300] text-white px-6 py-2 border-2 border-[#000000] rounded my-4 transition duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Partner With Us
          </button>
        </a>
      </div>

      {/* Small Screen SVG - Horizontally stacked with a gap */}
      <div className="flex lg:hidden flex-col justify-between gap-5 w-full mt-6">
        <div className="flex justify-center items-center">
          <img
            src="/sm high.svg"
            alt="bookbuzz_foundation"
            className="w-auto h-auto"
          />
        </div>
        <div className="flex justify-left items-left">
          <img
            src="/sm low.svg"
            alt="Ujesa_tribe"
            className="w-auto h-auto"
          />
        </div>
        {/* Button only visible on small screens, placed after SVGs */}
        <div className="flex justify-center items-center">
          <a
            href="https://anaoau.org/book-festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#008300] text-white px-6 py-2 border-2 border-[#000000] rounded my-4 transition duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Partner With Us
            </button>
          </a>
        </div>
      </div>

      {/* Large Screen SVG - Horizontally aligned with a gap */}
      <div className="hidden lg:flex flex-row justify-between gap-6 w-full">
        <div className="flex justify-center items-center">
          <img
            src="/big left.svg"
            alt="bookbuzz_foundation"
            className="w-[50rem] h-[20rem] object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/big right.svg"
            alt="Ujesa_tribe"
            className="w-[50rem] h-[20rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
