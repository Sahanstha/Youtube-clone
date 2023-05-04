import React from "react";
import { Link } from "react-router-dom";
const SideBarLink = ({ icons, titles, urls }) => {
  return (
    <>
      <Link to={urls}>
        <div className="flex  hover:bg-slate-800 pt-2 pb-2 mb-2">
          <p className="mr-10  text-[1.7rem] pt-[6.5px] ml-4">{icons}</p>
          <p className="text-[1.0rem] pt-[6.5px]">{titles}</p>
        </div>
      </Link>
    </>
  );
};

export default SideBarLink;
