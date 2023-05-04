import React from "react";
import Button from "./Button";

const Abovemain = () => {
  return (
    <>
      <div className="space-x-3 ml-10 flex  mt-5 text-white">
        <Button Values="All" />
        <Button Values="Music" />
        <Button Values="JavaScript" />
        <Button Values="Gaming" />
        <Button Values="Databases" />

        <Button Values="HipHop" />
        <Button Values="Grand Theft Auto" />
        <Button Values="Data Structures" />
        <Button Values="Tailwind" />
        <Button Values="Recently upload" />
        <Button Values="New to you" />
        <button className="ml-3 pt-1 pb-1 pl-3 pr-3 mb-auto bg-slate-900 rounded-3xl hover:bg-slate-600">
          &gt;
        </button>
      </div>
    </>
  );
};

export default Abovemain;
