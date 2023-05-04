import React from "react";

const Shimmer = () => {
  return (
    <div className="flex">
      {Array(5)
        .fill(" ")
        .map((e, index) => (
          <div className="w-[300px] h-[300px] space-x-3 space-y-4" key={index}>
            <p className="bg-[#333333] h-[100px]"></p>
            <p className="bg-[#333333] h-[100px]"></p>
            <p className="bg-[#333333] h-[100px]"></p>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
