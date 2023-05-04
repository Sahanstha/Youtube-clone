import { useSelector } from "react-redux";
import Abovemain from "./AboveMain";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { instance } from "../axios";
import Shimmer from "./Shimmer";

const Root = () => {
  const [videos, setVideos] = useState([]);
  const item = useSelector((store) => store.toggle.value);
  useEffect(() => {
    const fetchVideos = async () => {
      await instance
        .get(`/video/data?video_id=hs1W2KQluWA`)
        .then((res) => {
          console.log("response", res);
          setVideos(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchVideos();
  }, []);
  console.log(item);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <div>{item && <Sidebar />}</div>
        <div>
          <div className="">
            <Abovemain />
            {videos.length === 0 ? (
              <Shimmer />
            ) : (
              <div className="flex flex-wrap space-x-16 mt-3 justify-center">
                {videos.map((video, index) => (
                  <div key={index}>
                    <Cards data={video} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
