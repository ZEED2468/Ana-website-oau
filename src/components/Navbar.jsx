import React from "react";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const navLists = ["Guests", "Sponsors", "FAQ", "Contact Us"];
  return (
    <>
      <nav className="bg-[#072422] pt-4 pb-0 px-2 md:px-20 lg:px-28 text-white">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center">
              <img src="/ana-website-logo.svg" alt="analogo" />
              <img src="/oau.svg" alt="oaulogo" />
            </div>
            <div className="flex flex-col gap-0 text-[11.23px] md:text-base special-font">
              <p className="font-bold text-[9.5px] md:text-base">
                ASSOCIATION OF NIGERIAN AUTHORS
              </p>
              <p className="text-[0.55rem] leading-[0.85rem] md:text-base md:leading-[1.2rem]">
                OBAFEMI AWOLOWO UNIVERSITY (CHAPTER)
              </p>
            </div>
          </a>
          <div
            className={`${
              menu
                ? "bg-transparent"
                : "bg-white fixed z-[999] right-0 top-0 w-full h-full p-5"
            }`}
          >
            <div
              className={`${
                menu ? "hidden" : "flex"
              } mt-2 w-full justify-end cursor-pointer transition duration-300`}
              onClick={() => setMenu((prev) => !prev)}
            >
              <img
                src="/close.svg"
                alt="menu-close-logo"
                className="w-[2rem] cursor-pointer"
              />
            </div>
            <ul
              className={`${
                menu ? "text-white hidden" : "text-red-500 block"
              } lg:flex items-center gap-7 list-none text-white transition duration-300`}
            >
              {navLists.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      menu ? "text-white" : "text-black mt-6"
                    } special-font`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => setMenu((prev) => !prev)}
            className="text-red-500 block lg:hidden"
          >
            {menu && (
              <img
                src="/menu.svg"
                alt="menu-logo"
                className="w-[2rem] cursor-pointer"
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
