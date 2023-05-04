import React, { useState } from "react";
import logo from "assets/logo.png";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { MdVideoCameraBack } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { getShow } from "utils/toggleSlice";
const Navbar = () => {
  // const [display, setDisplay] = useState(true);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(getShow());
  };

  return (
    <>
      <nav className="nav flex mt-5 text-3xl text-white">
        <button className="menu mt-2 ml-4" onClick={handleToggle}>
          <AiOutlineMenu />
        </button>
        <div className="logo w-32 mt-2 ml-7">
          <img src={logo}></img>
        </div>
        <button className="search flex ">
          <input
            type="text"
            name="text"
            placeholder="Search "
            className=" ml-[27rem]  w-[32rem] rounded-l-3xl text-white p-3 text-sm bg-[#0f0f0f] border border-slate-600"
          />
          <div>
            <p className="search-icon bg-slate-700 rounded-r-3xl w-14 h-[2.85rem] ">
              <AiOutlineSearch className="text-white ml-2 pt-2 " size={35} />
            </p>
          </div>
        </button>
        <div className=" Mic  ml-3  bg-slate-800 rounded-full w-[2.8rem]  hover:bg-slate-500">
          <button className="text-2xl ml-[11.45px] mt-[10px] ">
            <BsFillMicFill />
          </button>
        </div>
        <div className="Pro_Cam_Noti ml-[28rem] flex  ">
          <div className=" mr-4 ml-4 pt-2 hover:bg-slate-500 ">
            <MdVideoCameraBack />
          </div>
          <div className=" mr-4 ml-4 pt-2  hover:bg-slate-500 ">
            <AiOutlineBell />
          </div>
          <div className="mr-4 ml-4 pt-2   hover:bg-slate-500">
            <CgProfile />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
