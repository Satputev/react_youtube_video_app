import axios from "axios";
const KEY = "AIzaSyDs3ufjX4LdGdTFYWiIBfST2YDVwxY_qkU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
