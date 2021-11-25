import axios from "axios";

export default axios.create({
  baseURL: "https://devendra-back-end.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
