import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#072422] flex flex-col items-stretch justify-between gap-[4rem] md:gap-[8.25rem] p-[2rem] md:p-28 pt-[10rem] pb-[2.5rem]">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-0">
          <div className="flex flex-col gap-[1.5rem] text-[11.23px] md:text-base special-font text-white">
            <div className=" flex flex-row justify-start items-center gap-0">
              <img
                src="/ana-website-logo.svg"
                alt="analogo"
                className="w-10 h-10 md:w-20 md:h-20"
              />
              <img
                src="/oau.svg"
                alt="oaulogo"
                className="w-20 h-12 md:w-40 md:h-24"
              />
            </div>
            <div>
              <p className="font-bold text-[9.5px] md:text-base">
                ASSOCIATION OF NIGERIAN AUTHORS
              </p>
              <p className="text-[0.55rem] leading-[0.85rem] md:text-base md:leading-[1.2rem]">
                OBAFEMI AWOLOWO UNIVERSITY (CHAPTER)
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://www.instagram.com/ana_oauchapter?igsh=eHd5NnN1bTl4YnRt"
              className="w-12 h-12 md:w-[4rem] md:h-[4rem] object-contain bg-[#051A17] rounded-full flex justify-center items-center p[1.2rem] hover:bg-[#072422] transition-colors duration-300"
            >
              <img src="/instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://x.com/_oau_ana"
              className="w-12 h-12 md:w-[4rem] md:h-[4rem] object-contain bg-[#051A17] rounded-full flex justify-center items-center hover:bg-[#072422] transition-colors duration-300"
            >
              <img src="/twitter.svg" alt="Twitter" />
            </a>
            <a
              href="https://wa.me/2348152760532?text=I'm%20reaching%20out%20to%20make%20enquiries%20about%20ANA-OAU."
              className="w-12 h-12 md:w-[4rem] md:h-[4rem] object-contain bg-[#051A17] rounded-full flex justify-center items-center hover:bg-[#072422] transition-colors duration-300"
            >
              <img src="/whatsapp.svg" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <img src="/booc-pic.svg" alt="booc-logo" />
      </div>
      <div className="flex items-center justify-between gap-4 lg:w-[49.375rem] relative z-10">
        <div className="text-white flex flex-col justify-start items-start special-font">
          <span>💚 Designed by</span>
          <a
            href="https://www.behance.net/desiredestiny"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-400 transition-colors duration-300 cursor-pointer relative z-20"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://www.behance.net/desiredestiny', '_blank');
            }}
          >
            Desire Destiny.
          </a>
        </div>
        <div className="hidden md:block">
          <img src="/booc-pic.svg" alt="booc-logo" />
        </div>
      </div>
      <div className="relative w-90% h-64 mt-[-10rem] ">
        <img
          src="/water-paint.svg"
          alt="ana-logo"
          className="w-30 h-29 md:w-64 md:h-64 absolute top-[4.5rem] right-[-2rem] md:top-[7rem] md:right-[-7rem]"
        />
      </div>
    </div>
  );
};

export default Footer;