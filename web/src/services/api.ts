import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://proffynlwserver.herokuapp.com"
    : "http://localhost:3333";

const api = axios.create({
  baseURL: URL,
});

export default api;
