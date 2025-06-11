import React from "react";

const Sponsors = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-[4.5rem_1.5rem;] lg:p[4.5rem_1.49975rem_3.5rem_2.5rem] lg:p-[6.5rem_7.49975rem_6.5rem_7.5rem] gap[2.5rem] lg:gap-[11.70363rem]">
      <div className="flex flex-col gap-5 flex-start">
        <h1 className="text-3xl font-bold special-font lg:w-[22.8125rem]">
          Our Sponsors & Partners
        </h1>
        <p className="text-[#62636C] lg:w-[26.75rem]">
          8 incredible guest artists, poets, and creators will join us to speak,
          perform, and inspire.
        </p>
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
      <div className="grid grid-cols-4 p-5 gap-10">
        <div className="rounded p-[3.9375rem_0rem] bg-[#FCFCD7]">
          <img
            src="/bookbuzz.svg"
            alt="bookbuzz_foundation"
            className="block w-full h-full object-cover"
          />
        </div>
        <div className="rounded p-[5.8125rem_2.8865rem_5.8125rem_2.824rem] bg-[#FCF2E8] col-span-2">
          <img
            src="/spur.svg"
            alt="the_spur_hub"
            className="block w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 rounded p-[0rem_2.5rem] bg-[#FCF2FC]">
          <img
            src="/Ujesa.svg"
            alt="Ujesa_tribe"
            className="block w-full h-full object-cover rounded-[50%] p-[0.31825rem_0.3335rem_0.30288rem_0.33394rem]"
          />
        </div>
        <div className="col-span-3 rounded p[2.6875rem_0rem] bg-[#EDFAE6]">
          <img
            src="/watermark.svg"
            alt="paradigm_book_reading_charity"
            className="w-48 h-16 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
