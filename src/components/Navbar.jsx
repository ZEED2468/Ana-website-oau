import React from "react";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const navLists = ["Guests", "Sponsors", "FAQ", "Contact Us"];
  return (
    <>
      <nav className="bg-red-300 p-5 px-2 md:px-28 text-white">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="flex justify-between items-center gap-4 cursor-pointer"
          >
            <div className="flex items-center">
              <img src="/react.svg" alt="churchlogo" />
              <img src="/react.svg" alt="oaulogo" />
            </div>
            <div className="flex flex-col gap-0 text-[11.23px] md:text-base">
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
                : "bg-white absolute right-0 top-0 w-full h-full p-5"
            }`}
          >
            <div
              className={`${
                menu ? "hidden" : "flex"
              } mt-2 w-full justify-end cursor-pointer`}
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
              } md:flex items-center gap-7 list-none text-white`}
            >
              {navLists.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${menu ? "text-white" : "text-red-500 mt-6"}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => setMenu((prev) => !prev)}
            className="text-red-500 block md:hidden"
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
