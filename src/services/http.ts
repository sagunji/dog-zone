import axios from "axios";

const http = axios.create({
  baseURL: "https://dog.ceo/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
