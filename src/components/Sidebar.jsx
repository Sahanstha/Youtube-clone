import { AiFillHome, AiOutlineScissor } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiHistory } from "react-icons/bi";
import {
  MdOndemandVideo,
  MdOutlineWatchLater,
  MdSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";
import { SiYoutubestudio } from "react-icons/si";
import SideBarLink from "./SideBarLink";

const Sidebar = () => {
  return (
    <>
      <div className="sideBar className=flex flex-col w-64 bg-zinc-900 h-screen mt-2 pt-5 mr-10  text-white">
        <div className="topSide">
          <SideBarLink titles={"Home"} icons={<AiFillHome />} urls="./Home" />
          <SideBarLink
            titles={"Shorts"}
            icons={<SiYoutubestudio />}
            urls="./Shorts"
          />
          <SideBarLink
            titles={"Subscription"}
            icons={<MdSubscriptions />}
            urls="/.Subscription"
          />
        </div>
        <div className="line border-b-[1px] ml-2 mr-2 text-white"></div>
        <div className="middleSide">
          <SideBarLink
            titles={"Library"}
            icons={<MdVideoLibrary />}
            urls="./Library"
          />
          <SideBarLink
            titles={"History"}
            icons={<BiHistory />}
            urls="/.History"
          />
          <SideBarLink
            titles={"Your Videos"}
            icons={<MdOndemandVideo />}
            urls="./YourV"
          />
          <SideBarLink
            titles={"Watch Later"}
            icons={<MdOutlineWatchLater />}
            urls="./WatchL"
          />
          <SideBarLink
            titles={"Your Clips"}
            icons={<AiOutlineScissor />}
            urls="./YourC"
          />
        </div>
        <div className="border-b-[1px] ml-2 mr-2"></div>
        <div className="text-white ml-5 pt-4 pb-1 text-[17px]">
          Subscriptions
        </div>
        <div className="bottomSide">
          <SideBarLink
            titles={"Sahan Shrestha"}
            icons={<CgProfile />}
            urls="./Sahan"
          />
          <SideBarLink
            titles={"Sahan Shrestha"}
            icons={<CgProfile />}
            urls="./Sahan"
          />
          <SideBarLink
            titles={"Sahnan Shrestha"}
            icons={<CgProfile />}
            urls="/.Sahan"
          />
          <SideBarLink
            titles={"Sahnan Shrestha"}
            icons={<CgProfile />}
            urls="/.Sahan"
          />
          <SideBarLink
            titles={"Sahnan Shrestha"}
            icons={<CgProfile />}
            urls="/.Sahan"
          />
          <SideBarLink
            titles={"Sahnan Shrestha"}
            icons={<CgProfile />}
            urls="/.Sahan"
          />
        </div>
      </div>
    </>
  );
};
export default Sidebar;
