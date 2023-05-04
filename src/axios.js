// import axios from "axios";

// export const instance = axios.create({
//   baseURL: "https://youtube-v38.p.rapidapi.com/",
// });
// instance.defaults.headers.common["content-type"] = "application/octet-stream";
// instance.defaults.headers.common["X-RapidAPI-key"] =
//   process.env.REACT_APP_YOUTUBE_RAPIDAPI_KEY;
// instance.defaults.headers.common["X-RapidAPI-host"] =
//   process.env.REACT_APP_YOUTUBE_RAPIDAPI_HOST;

import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_BASE_URL,
});

// Alter defaults after instance has been created
instance.defaults.headers.common["content-type"] = "application/octet-stream";
instance.defaults.headers.common["X-RapidAPI-Key"] =
  process.env.REACT_APP_YOUTUBE_RAPIDAPI_KEY;
instance.defaults.headers.common["X-RapidAPI-Host"] =
  process.env.REACT_APP_YOUTUBE_API_HOST;
