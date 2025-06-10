import React from "react";

const Sponsors = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-[4.5rem_1.5rem;] md:p[4.5rem_1.49975rem_3.5rem_2.5rem] lg:p-[6.5rem_7.49975rem_6.5rem_7.5rem] gap[2.5rem] lg:gap-[11.70363rem]">
      <div className="flex flex-col gap-5 flex-start">
        <h1 className="text-3xl font-bold special-font lg:w-[22.8125rem]">
          Festival Highlights From Last Time
        </h1>
        <p className="text-[#62636C] lg:w-[26.75rem]">
          Our first edition lit up the campus with poetry, art exhibitions,
          music, and vibrant storytelling. This year? We're going bolder.
        </p>
      </div>
      <div className="grid grid-cols-3 p-5 gap-0">
        <img
          src="/pic1.svg"
          alt="festival highlights"
          className="block w-full h-full object-cover rounded-tl-lg"
        />
        <img
          src="/pic2.svg"
          alt="festival highlights"
          className="col-span-2 block w-full h-full object-cover rounded-tr-lg"
        />
        <img
          src="/pic3.svg"
          alt="festival highlights"
          className="col-span-3 block w-full h-full object-cover rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default Sponsors;
