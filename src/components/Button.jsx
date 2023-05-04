import React from "react";

const Button = ({ Values }) => {
  return (
    <div className="button text-white">
      <button className="border  bg-gray-800 h-8 rounded-2xl text-center px-4 hover:bg-slate-400">
        {Values}
      </button>
    </div>
  );
};

export default Button;
