import React from "react";

const Connect = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="grid gap-8 grid-flow-col place-items-center">
        <button className="text-[#302F2F] h-10 text-md flex items-center space-x-2 bg-transparent outline outline-1 outline-stone-400">
          <span>START MEETING</span>
        </button>
        <button className="text-[#FFFFFF] h-10 text-md flex items-center space-x-2 bg-[#ffd150] outline outline-1 outline-[#ffd150]">
          <span>JOIN MEETING</span>
        </button>
      </div>
    </div>
  );
};

export default Connect;
