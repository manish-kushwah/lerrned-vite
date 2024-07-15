import React from "react";
import logo from "../../assets/letswhy_logo.svg"; // import your logo image

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full flex justify-between items-center px-16 py-2 z-[999]">
      <img src={logo} alt="Logo" className="h-12" />
      <span className="grid gap-8 grid-flow-col place-items-center">
        <button className="text-[#302F2F] h-10 text-md flex items-center space-x-2 bg-transparent outline outline-1 outline-stone-400">
          <span>LOGIN</span>
        </button>
        <button className="text-[#FFFFFF] h-10 text-md flex items-center space-x-2 bg-[#71C047] outline outline-1 outline-[#71C047]">
          <span>REGISTER</span>
        </button>
      </span>
    </header>
  );
};

export default Header;
