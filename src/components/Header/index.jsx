import React from "react";
import logo from "../../assets/Lerrned_logo.svg"; // import your logo image

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full flex justify-between items-center px-16 py-2">
      <img src={logo} alt="Logo" className="h-16" />
      <span className="grid gap-8 grid-flow-col place-items-center">
        <button className="text-[#302F2F] h-10 text-md flex items-center space-x-2 bg-white">
          <span>LOGIN</span>
        </button>
        <button className="text-[#FFFFFF] h-10 text-md flex items-center space-x-2 bg-[#69D8BD]">
          <span>REGISTER</span>
        </button>
      </span>
    </header>
  );
};

export default Header;
